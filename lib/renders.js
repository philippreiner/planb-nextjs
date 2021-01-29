import Image from 'next/image'
import Style from '@components/content/content.module.css'

// Overrides the default rendering of the markdown image syntax.
// Still using the same syntax but returning custom HTML (or in our case JSX)
// for rendering the image.
export function markdownRenderers(imageInfos) {
  return {
    image: image => {
      const matchingInfo = imageInfos.find(info => info.link == image.src);
      const width = matchingInfo.dimensions.width;
      const height = matchingInfo.dimensions.height;

      return <div className={Style.image}><Image src={image.src} width={width} height={height} alt={image.alt} layout="responsive" /></div>
    }
  }
}