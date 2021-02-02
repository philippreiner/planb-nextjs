import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import sizeOf from 'image-size'
import * as parse from 'parse-markdown-links'
import sharp from 'sharp';


const POSTS_DIRECTORY = path.join(process.cwd(), 'content/posts');
const PEOPLE_DIRECTORY = path.join(process.cwd(), 'content/people');
const PUBLIC_DIRECTORY = path.join(process.cwd(), 'public');
const MAX_IMG_SIZE = 1200;

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(POSTS_DIRECTORY, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(POSTS_DIRECTORY, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const markdownString = matterResult.content;

  const imageLinks = getSupportedImageLinks(markdownString);
  const infos = await resizeImagesAndBuildInfos(imageLinks);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml: markdownString,
    imageInfos: infos,
    ...matterResult.data
  }
}

export async function getAuthorData(name) {
  const fullPath = path.join(PEOPLE_DIRECTORY, `${name}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id and contentHtml
  return {
    name,
    ...matterResult.data
  }
}

function getSupportedImageLinks(markdown) {
  let links = parse(markdown);
  links = links.filter(l => (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(l));
  return links;
}

async function resizeImagesAndBuildInfos(imageLinks) {
  const infos = [];
  for (const link of imageLinks) {
    const fullPath = path.join(PUBLIC_DIRECTORY, link);
    const buffer = await sharp(fullPath).resize(MAX_IMG_SIZE, MAX_IMG_SIZE, { fit: 'inside' }).withMetadata().toBuffer();
    const dimensions = await sizeOf(buffer);
    const image = `data:image/${dimensions.type};base64,${buffer.toString('base64')}`;
    infos.push({
      dimensions,
      image,
      link
    });
  }

  return infos;
}