import { screen } from '@testing-library/react'
import { PlusLg } from '@styled-icons/bootstrap/PlusLg'

import Button from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Button />', () => {
  it('should render button with primary color by default', () => {
    renderWithTheme(<Button>Click Here</Button>)

    expect(
      screen.getByRole('button', { name: /click here/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /click here/i })).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('should render button with black color', () => {
    renderWithTheme(<Button color="black">Click Here</Button>)

    expect(screen.getByRole('button', { name: /click here/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render button with icon', () => {
    renderWithTheme(
      <Button icon={<PlusLg data-testid="icon" />}>Click Here</Button>
    )

    expect(screen.getByText(/click here/i)).toBeInTheDocument()
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })
})
