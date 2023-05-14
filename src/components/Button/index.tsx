import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  color?: 'primary' | 'black'
  size?: 'normal' | 'small'
  backgroundColor?: 'dark' | 'transparent'
  icon?: JSX.Element
}

const Button = ({
  children,
  color = 'primary',
  backgroundColor = 'dark',
  icon,
  size = 'normal'
}: ButtonProps) => (
  <S.Wrapper
    color={color}
    size={size}
    hasIcon={!!icon}
    backgroundColor={backgroundColor}
  >
    {!!icon && icon}
    {children}
  </S.Wrapper>
)

export default Button
