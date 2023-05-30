import * as S from './styles'

const CompanyInfo = () => (
  <S.Wrapper>
    <S.BoxInfo>
      <S.Title>O que Somos?</S.Title>
      <S.Description>
        <p>
          Somos uma empresa especializada em serviços de desenvolvimento de
          <span> landing pages.</span> Criamos páginas personalizadas e
          otimizadas para conversão, projetadas para capturar a atenção dos
          visitantes e gerar
          <span> leads qualificados</span>.
        </p>
        Com nossa expertise em design e desenvolvimento web, garantimos que sua
        landing page seja<span> visualmente atraente</span>, responsiva e de
        fácil navegação.
      </S.Description>
    </S.BoxInfo>

    <S.BoxTech>
      <S.Column>
        <S.ColumnTitle>Desenvolvimento com:</S.ColumnTitle>
        <S.NextImage src="/img/nextlogo.svg" alt="" />
      </S.Column>

      <S.Column>
        <S.ColumnTitle>Estrutura de design:</S.ColumnTitle>
        <S.FigmaImage src="/img/figma.svg" alt="" />
      </S.Column>

      <S.Column>
        <S.ColumnTitle>Personalização com:</S.ColumnTitle>
        <S.StrapiImage src="/img/strapi.svg" alt="" />
      </S.Column>
    </S.BoxTech>
  </S.Wrapper>
)

export default CompanyInfo
