import { render, screen } from '@testing-library/react'

import CompanyInfo from '.'

describe('<CompanyInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(<CompanyInfo />)

    expect(screen.getByRole('heading', { name: /CompanyInfo/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
