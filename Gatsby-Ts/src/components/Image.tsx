import { imageWrapper } from './image.module.scss'

interface ImageProps {
  src: string;
  alt: string;
}

// StaticImage doesn't work beacuse we cannot pass props to StaticImage
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#restrictions-on-using-staticimage
export const Image = ({ src, alt }: ImageProps) => (
  <div className={imageWrapper}>
    <img src={src} alt={alt} />
  </div>
)
