import { render, screen } from '@testing-library/react'

import CompanyPortfolio from '.'

describe('<CompanyPortfolio />', () => {
  it('should render the heading', () => {
    const { container } = render(<CompanyPortfolio />)

    expect(screen.getByRole('heading', { name: /CompanyPortfolio/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
