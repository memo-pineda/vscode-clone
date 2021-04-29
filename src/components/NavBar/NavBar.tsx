import styled from '@emotion/styled';

const NavContainer = styled.nav`
  border: 1px solid red;
  height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

const NavBar = () => (
    <NavContainer>
        <ul>
            <li>One Icon</li>
            <li>Second Icon</li>
            <li>Third Icon</li>
            <li>Fourth Icon</li>
        </ul>
    </NavContainer>
)

export default NavBar;
