export enum AppRoutes {
  MAIN = 'main',
  BLOG = 'blog',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.BLOG]: '/blog',
  [AppRoutes.NOT_FOUND]: '*',
}
