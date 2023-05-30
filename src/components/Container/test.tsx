import '@testing-library/jest-dom'
import React from 'react'

global.React = React

import theme from '../../styles/theme'

import { renderWithTheme } from '../../utils/tests/helpers'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>NoteTest</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )
  })
})
