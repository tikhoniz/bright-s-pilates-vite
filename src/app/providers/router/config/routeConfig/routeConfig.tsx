import { MainPage } from 'pages/MainPage'
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
}
