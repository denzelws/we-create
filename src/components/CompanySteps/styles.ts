import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xlarge};
  `}
`

export const BoxTitle = styled.div``

export const BoxInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.medium};
    gap: 5rem;
    width: 100%;

    ${media.lessThan('medium')`
     flex-direction column;
     align-items: center;
     justify-content: center;
     gap: 1rem;
    `}
  `}
`

export const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  max-height: max-content;

  ${media.lessThan('medium')`
  padding: 2rem 1rem;
  `}
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    margin-bottom: ${theme.spacings.xsmall};

    ${media.lessThan('medium')`
    font-size: 1rem;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 3.5rem;
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.bold};

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Number = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${darken(0.2, theme.colors.lightGray)};
    cursor: pointer;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxsmall};
    color: ${darken(0.2, theme.colors.gray)};
    padding: 2rem 1rem 2rem 0;

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.small};
    `}
  `}
`
