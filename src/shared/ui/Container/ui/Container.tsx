import { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Container.module.scss'

interface ContainerProps {
  className?: string
  children: ReactNode
}
export const Container = (props: ContainerProps) => {
  const { className, children } = props
  return (
    <main className={classNames(cls.Container, {}, [className])}>
      {children}
    </main>
  )
}
