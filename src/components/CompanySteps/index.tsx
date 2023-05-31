import * as S from './styles'

const CompanySteps = () => (
  <S.Wrapper>
    <S.BoxTitle>
      <S.Heading>DESENVOLVIMENTO</S.Heading>
      <S.Title>Como fazemos?</S.Title>
    </S.BoxTitle>

    <S.BoxInfo>
      <S.Boxes>
        <S.Number>01</S.Number>
        <S.Name>Busca e Análise</S.Name>
        <S.Description>
          Nosso processo de análise busca atender ao interesse do cliente,
          seguindo melhores práticas para resultados excepcionais.
        </S.Description>
      </S.Boxes>
      <S.Boxes>
        <S.Number>02</S.Number>
        <S.Name>Prototipação</S.Name>
        <S.Description>
          O processo de prototipação da página web considera a análise detalhada
          alinhando as expectativas do cliente desde o início do projeto.
        </S.Description>
      </S.Boxes>
      <S.Boxes>
        <S.Number>03</S.Number>
        <S.Name>UI-Design</S.Name>
        <S.Description>
          Criamos interfaces visuais atraentes e funcionais, garantindo uma
          experiência de usuário intuitiva e agradável.
        </S.Description>
      </S.Boxes>
      <S.Boxes>
        <S.Number>04</S.Number>
        <S.Name>Construção / código</S.Name>
        <S.Description>
          Transformamos o design em código limpo e semântico, seguindo as
          melhores práticas de desenvolvimento web.
        </S.Description>
      </S.Boxes>
    </S.BoxInfo>
  </S.Wrapper>
)

export default CompanySteps
