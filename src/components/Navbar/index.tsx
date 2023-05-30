import Button from 'components/Button'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'

const Navbar = () => (
  <S.Wrapper>
    <MediaMatch lessThan="medium">
      <MenuIcon size={22} />
    </MediaMatch>

    <S.Logo>we create</S.Logo>

    <MediaMatch greaterThan="medium">
      <S.NavBox>
        <S.Portfolio>Portfolio</S.Portfolio>
        <S.AboutUs>Sobre nós</S.AboutUs>
        <S.Contact>Contato</S.Contact>
      </S.NavBox>
    </MediaMatch>

    <Button size="small">Entre</Button>
  </S.Wrapper>
)

export default Navbar
