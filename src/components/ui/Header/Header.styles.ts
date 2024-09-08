'use client';

import styled from 'styled-components';

const HeaderRoot = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.border.small};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.borderRadius.large};
  margin: 48px auto 0 auto;
  max-width: calc(80% - 8px);
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderMenu = styled.ul`
  & li {
    display: inline-block;
    margin-right: ${({ theme }) => theme.spacing.large};

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Test = styled.div`
  height: 50vh;
  margin: 48px auto;
  border: ${({ theme }) => theme.border.small};
  max-width: calc(80% - 8px);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background-color: ${({ theme }) => theme.colors.secondary[500]};
`;

export { HeaderMenu, HeaderNav, HeaderRoot, Test };

