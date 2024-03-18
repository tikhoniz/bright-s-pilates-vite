import BlogPage from 'pages/BlogPage/ui/BlogPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { RouteProps } from 'react-router-dom'
import { AppRoutes, RoutePath } from './routePath'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.BLOG]: {
    path: RoutePath.blog,
    element: <BlogPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
