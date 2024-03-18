import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'
import { AppRoutes, RoutePath } from './routePath'
import { NotFoundPage } from 'pages/NotFoundPage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
