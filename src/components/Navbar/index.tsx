import Button from 'components/Button'
import * as S from './styles'

const Navbar = () => (
  <S.Wrapper>
    <S.Logo>we create</S.Logo>
    <S.Portfolio>Portfolio</S.Portfolio>
    <S.AboutUs>Sobre nós</S.AboutUs>
    <S.Contact>Contato</S.Contact>
    <Button size="small">Entre</Button>
  </S.Wrapper>
)

export default Navbar
