import { RoutePath } from 'app/providers/router/config/routeConfig/routePath'
import { useNavigate } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  Button,
  ButtonShape,
  ButtonSize,
  ButtonTheme,
} from 'shared/ui/Button/Button'
import { Page } from 'shared/ui/Page'
import { VStack } from 'shared/ui/Stack'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage = ({ className }: NotFoundPageProps): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>
      <VStack align="center" justify="center">
        <h2>404</h2>
        <p>такой страницы не существует</p>
        <Button
          className={cls.button}
          size={ButtonSize.L}
          shape={ButtonShape.ROUND}
          theme={ButtonTheme.BACKGROUND_COLOR}
          onClick={() => navigate(RoutePath.main)}
        >
          На главную
        </Button>
      </VStack>
    </Page>
  )
}

export default NotFoundPage
