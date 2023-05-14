import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80vh;
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
`

export const Image = styled.div`
  background: url(/img/illustration.png);
  background-size: cover;
`
