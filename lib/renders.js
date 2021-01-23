import Image from 'next/image'
import Style from '@components/content/content.module.css'
//import sizeOf from 'image-size'

// Overrides the default rendering of the markdown image syntax.
// Still using the same syntax but returning custom HTML (or in our case JSX)
// for rendering the image.
export function markdownRenderers() {
  
  return {
    image: image => {
      return <div className={Style.image}><Image src={image.src} width="500" height="500" alt={image.alt} layout="fixed" /></div>
    }
  }
}