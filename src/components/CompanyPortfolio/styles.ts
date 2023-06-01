import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const BoxInfo = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
    margin-top: ${theme.spacings.small};
    `}
  `}
`

export const BoxImages = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    display: flex;
    align-items: center;
    gap: 3rem;

    ${media.lessThan('medium')`
    flex-direction: column;
    margin-top: ${theme.spacings.small};
    `}
  `}
`

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    margin-bottom: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xsmall};

    ${media.lessThan('medium')`
    font-size: 1rem;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.bold};
  `}
`

export const BoxImage = styled.img`
  max-width: 100%;
  height: 30rem;
`

export const BoxTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${darken(0.1, theme.colors.darkGray)};
    font-weight: ${theme.font.bold};
    margin: ${theme.spacings.xxsmall} 0;
  `}
`

export const BoxDescription = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${darken(0.1, theme.colors.gray)};
    font-weight: ${theme.font.bold};
  `}
`
