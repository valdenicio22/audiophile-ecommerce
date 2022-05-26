import { renderWithThemeProvider } from '../../utils/renderWithThemeProvider'
import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    renderWithThemeProvider(<Header />)
  })
})
