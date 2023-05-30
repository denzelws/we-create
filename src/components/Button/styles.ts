import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'
import { lighten } from 'polished'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'color' | 'backgroundColor'>

const wrapperModifiers = {
  normal: () => css`
    height: 5.5rem;
    width: 12rem;
  `,
  small: () => css`
    height: 4rem;
    width: 12rem;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      margin-right: ${theme.spacings.xxsmall};
      color: ${theme.colors.black};
      background: none;
    }
  `,
  dark: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background: ${lighten(0.1, '#030517')};
    }
  `,
  transparent: () => css`
    background: transparent;
    border: none;
    transition: font-size 0.4s ease-in-out;

    &:hover {
      font-size: 2rem;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, hasIcon, size, backgroundColor }) => css`
    cursor: pointer;
    display: align-flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${backgroundColor === 'dark' && wrapperModifiers.dark(theme)}
    ${backgroundColor === 'transparent' && wrapperModifiers.transparent()}
  `}
`
