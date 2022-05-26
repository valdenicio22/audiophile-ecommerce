import { renderWithThemeProvider } from '../../utils/renderWithThemeProvider'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo', () => {
    renderWithThemeProvider(<Logo />)
  })
})
