import { render, screen } from '@testing-library/react'

import CompanySteps from '.'

describe('<CompanySteps />', () => {
  it('should render the heading', () => {
    const { container } = render(<CompanySteps />)

    expect(screen.getByRole('heading', { name: /CompanySteps/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
