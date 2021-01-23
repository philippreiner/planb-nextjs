import Image from 'next/image'

// Overrides the default rendering of the markdown image syntax.
// Still using the same syntax but returning custom HTML (or in our case JSX)
// for rendering the image.
export function markdownRenderers() {
  return {
    image: image => {
      return <Image src={image.src} alt={image.alt} width="500" height="300" layout="responsive" />
    }
  }
}