import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'shared/ui/Page'
import cls from './BlogPage.module.scss'

interface BlogPageProps {
  className?: string
}

const BlogPage = memo(({ className }: BlogPageProps) => {
  return (
    <Page className={classNames(cls.BlogPage, {}, [className])}>
      <h1>Блог</h1>
    </Page>
  )
})

export default BlogPage
