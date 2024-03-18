import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'shared/ui/Page'
import { Hero } from 'widgets/Hero'
import cls from './MainPage.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from 'app/providers/router/config/routeConfig/routePath'

interface MainPageProps {
  className?: string
}

const MainPage = memo(({ className }: MainPageProps) => {
  return (
    <Page className={classNames(cls.MainPage, {}, [className])}>
      <Link to={RoutePath.blog}>БЛОГ</Link>
      <Hero />
    </Page>
  )
})

export default MainPage
