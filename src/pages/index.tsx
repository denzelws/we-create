import Navbar from 'components/Navbar'
import Content from 'components/Content'
import { Container } from 'components/Container'
import CompanyInfo from 'components/CompanyInfo'

const Index = () => (
  <>
    <Navbar />
    <Content />
    <Container>
      <CompanyInfo />
    </Container>
  </>
)

export default Index
