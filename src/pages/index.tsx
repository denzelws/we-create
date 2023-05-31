import Navbar from 'components/Navbar'
import Content from 'components/Content'
import { Container } from 'components/Container'
import CompanyInfo from 'components/CompanyInfo'
import CompanySteps from '../components/CompanySteps'

const Index = () => (
  <>
    <Navbar />
    <Content />
    <Container>
      <CompanyInfo />
      <CompanySteps />
    </Container>
  </>
)

export default Index
