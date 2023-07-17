import cls from './Button.module.scss';
import { classNames } from 'shared/config/lib/classNames/ClassNames';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props

  return (
    <button
      className={classNames(cls.Button, {[cls[theme]]: true}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}