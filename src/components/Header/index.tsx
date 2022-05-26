import * as S from './styles'
import { List, Cart3 } from '@styled-icons/bootstrap'
import Logo from 'components/Logo'

const Header = () => (
  <S.Wrapper>
    <S.HeaderLine />
    <S.HeaderContainer>
      <List width={27} height={27} />
      <Logo />

      <Cart3 width={25} height={25} />
    </S.HeaderContainer>
  </S.Wrapper>
)

export default Header
