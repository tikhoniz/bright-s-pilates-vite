import { memo } from 'react'
import cover from 'shared/assets/images/home-cover-image.webp'
import coverPlaceholder from 'shared/assets/images/tiny_home-cover-image.webp'
import { classNames } from 'shared/lib/classNames/classNames'
import { Image } from 'shared/ui/Image'
import cls from './Hero.module.scss'

interface HeroProps {
  className?: string
}

export const Hero = memo(({ className }: HeroProps) => {
  return (
    <div className={classNames(cls.Hero, {}, [className])}>
      <Image
        alt="Девушка выполняет упражнение в большой светлой комнате"
        src={cover}
        placeholderSrc={coverPlaceholder}
        className={cls.image}
      />

      <h1 className={cls.titleBlock}>
        <span className={cls.subtitle}>Online studio</span>
        <span className={cls.title}>Bright&apos;s Pilates</span>
      </h1>
    </div>
  )
})
