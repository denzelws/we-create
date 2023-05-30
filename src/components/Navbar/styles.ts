import styled from 'styled-components'
import media from 'styled-media-query'

import * as ButtonStyles from 'components/Button/styles'
import { lighten } from 'polished'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem;
  color: black;

  ${media.lessThan('medium')`
  ${ButtonStyles.Wrapper} {
    height: 4rem;
    width: 8rem;
  }
  `}
`

export const MenuGroup = styled.div`
  display: flex;
  align-items: center;
`

export const NavBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  cursor: pointer;
`

export const MobileLogo = styled.h2`
  font-size: 2rem;
  cursor: pointer;
  color: purple;
`

export const Logo = styled.h2`
  font-size: 1.8rem;
  cursor: pointer;
  ${media.lessThan('medium')`
  margin-left: 3rem;
  `}
`

export const Portfolio = styled.h2``

export const AboutUs = styled.h2``

export const Contact = styled.h2``
