import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavItemProps {
    active?: boolean;
}

export const NavigationBar = styled.nav`
    display: flex;
    padding: 2rem 0rem 6rem;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    flex-direction: column;
`;

export const AllOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const LeftOptions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RightOptions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const NavLogo = styled.img`
    cursor: pointer;
`

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding: 0;
`;

export const NavItem = styled(Link) <NavItemProps>`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    color: black;

    border-bottom: ${(props) => (props.active ? '3px solid var(--primary-pink)' : 'none')};
    color: ${(props) => (props.active && 'var(--primary-pink)')};

    &:hover {
        border-bottom: 3px solid var(--primary-pink);
    }

`;

export const HrContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Hr = styled.hr`
    border: none;
    border-top: 2px solid #000;
    width: 90%;
`;

export const AdjustContainer = styled.div`
    width: 44px;
    height: 44px;
    background: var(--primary-pink);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const UserContainer = styled.div`
    cursor: pointer;
`

export const UserCard = styled.div`
    position: absolute;
    top: 75px;
    right: 10px;
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
    z-index: 100;
    width: 15%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`