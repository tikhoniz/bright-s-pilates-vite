import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'shared/ui/Page'
import { Hero } from 'widgets/Hero'
import cls from './MainPage.module.scss'

interface MainPageProps {
  className?: string
}

const MainPage = memo(({ className }: MainPageProps) => {
  return (
    <Page className={classNames(cls.MainPage, {}, [className])}>
      <Hero />
    </Page>
  )
})

export default MainPage
