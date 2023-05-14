import Button from 'components/Button'
import * as S from './styles'
import { PlusLg } from '@styled-icons/bootstrap'

const Content = () => (
  <S.Wrapper>
    <S.Column>
      <S.Title>Scale and don't break privacy >_</S.Title>
      <S.Description>Accelerate your speed of inovation while<br/> ensuring data privacy, security and <br/> compliance. As easy with API.</S.Description>

      <S.ButtonBox>
        <Button>click here</Button>
        <Button icon={<PlusLg />} backgroundColor='transparent' color='black'>veja o portfolio</Button>
      </S.ButtonBox>
    </S.Column>

    <S.Image />
  </S.Wrapper>
)

export default Content
