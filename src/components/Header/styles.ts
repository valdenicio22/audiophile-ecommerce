import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding-bottom: 3.2rem;

    color: ${theme.colors.white};
    background-color: ${theme.colors.mediumBlack};
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`

export const HeaderLine = styled.div`
  ${({ theme }) => css`
    padding-top: 1.6rem;
    background-color: ${theme.colors.lightBlack};
    margin-bottom: 1.6rem;
  `}
`

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.containers.mobile};
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`
