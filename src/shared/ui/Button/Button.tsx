import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { Loader } from '../Loader/Loader'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  GRAY = 'gray',
  BACKGROUND_COLOR = 'background_color',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export enum ButtonShape {
  ROUND = 'round',
  RECTANGLE = 'rectangle',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  shape?: ButtonShape
  children?: ReactNode
  isLoading?: boolean
  uppercase?: boolean
  disabled?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.BACKGROUND_COLOR,
    disabled,
    size = ButtonSize.M,
    shape = ButtonShape.RECTANGLE,
    uppercase = false,
    isLoading = false,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[size]]: true,
    [cls[shape]]: true,
    [cls.disabled]: disabled,
    [cls.uppercase]: uppercase,
  }

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      <span>{isLoading ? <Loader className={cls.loader} /> : children}</span>
    </button>
  )
})
