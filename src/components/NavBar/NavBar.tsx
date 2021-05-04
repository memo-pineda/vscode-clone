import styled from '@emotion/styled';

// Colors
// Navbar #333333
// Editor #1E1E1E
// Second Navbar #252526
const NavContainer = styled.nav`
    align-items: center;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 4rem;
`;

const TopRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const BottomRowContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export interface NavBarProps {
    topElements: JSX.Element[];
    bottomElements: JSX.Element[];
}

const NavBar = ({topElements, bottomElements}: NavBarProps) => (
    <NavContainer>
        <TopRowContainer>
            {topElements}
        </TopRowContainer>
        <BottomRowContainer>
            {bottomElements}
        </BottomRowContainer>
    </NavContainer>
)

export default NavBar;
