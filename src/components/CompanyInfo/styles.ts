import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;

  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  gap: 0;
  height: max-content;
  `}
`

export const BoxInfo = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.medium};
      margin-right: 0;
      margin-bottom: 0;
      margin-left: 0;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
    font-weight: ${theme.font.normal};

    p {
      margin-bottom: ${theme.spacings.small};
    }

    span {
      background: linear-gradient(#9c27b0, #ab47bc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`

export const BoxTech = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    margin: ${theme.spacings.medium} 0;
    justify-content: center;
    gap: 2rem;
    flex: 1;

    ${media.lessThan('medium')`
    margin-top: 3rem;
    height: min-content;
    `}
  `}
`

export const Column = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  flex: 1;

  ${media.lessThan('medium')`
  margin: 0;
  `}
`

export const ColumnTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const FigmaImage = styled.img`
  width: 3.3rem;
  height: 3.3rem;
`

export const StrapiImage = styled.img`
  width: 8.8rem;
  height: 3rem;
`

export const NextImage = styled.img`
  width: 5.5rem;
`
