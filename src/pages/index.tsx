import Navbar from 'components/Navbar'
import Content from 'components/Content'
import { Container } from 'components/Container'
import CompanyInfo from 'components/CompanyInfo'
import CompanySteps from '../components/CompanySteps'
import CompanyPortfolio from '../components/CompanyPortfolio'

const Index = () => (
  <>
    <Navbar />
    <Content />
    <Container>
      <CompanyInfo />
      <CompanySteps />
      <CompanyPortfolio />
    </Container>
  </>
)

export default Index
