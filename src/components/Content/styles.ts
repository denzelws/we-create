import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: max-content;

  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`

export const Title = styled.h1`
  font-size: 9rem;
  font-weight: 400;
  text-align: center;
  line-height: 8rem;

  ${media.lessThan('medium')`
  font-size: 5rem;
  line-height: 4rem;
  `}
`

export const Description = styled.h3`
  text-align: center;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;
`

export const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;

  ${media.lessThan('medium')`
  margin-bottom: 2rem;
  `}
`

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  max-width: 100%;
`
