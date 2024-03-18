import { memo, useEffect, useRef, useState } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Image.module.scss'

interface ImageProps {
  src: string
  alt: string
  className?: string
  placeholderSrc?: string
}
export const Image = memo((props: ImageProps) => {
  const { src, alt, placeholderSrc, className } = props
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = src || ''
      imageRef.current.onload = () => setImgSrc(src)
    }
  }, [src])

  const mods: Mods = {
    [cls.loaded]: imgSrc !== placeholderSrc,
  }

  return (
    <div className={classNames(cls.Image, mods, [className])}>
      <picture>
        <source srcSet={imgSrc} type="image/webp"></source>
        <img ref={imageRef} src={imgSrc} alt={alt} />
      </picture>
    </div>
  )
})
