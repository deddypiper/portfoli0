import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    transition: 0.5s ease;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;
export const DivMobile = styled.ul`
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  justify-content: space-around;
  min-height: 30vh;
  padding: 3rem 0rem 2rem 0rem;
  align-items: center;
  transition: 2s ease in;
  position: absolute;
  z-index: 1;
`;

// Navigation Links
export const Linker = styled.a`
  font-size: 2rem;
`

export const NavLink = styled.a`
  font-size: 2rem;
  padding: 1rem;
  border-radius: 15%;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  opacity: 0.75;
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    transform: scale(1.2) !important;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const MobLink = styled.button`
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
  color: rgba(255, 255, 255, 0.75);
  opacity: 0.75;
  padding: 1rem;
  background: transparent;
  border: none;
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
      background-color: #212d45;
      transform: scale(1.2);
      cursor: pointer;
    }
`
export const Burger = styled.div`
  transition: 0.3s ease;
  display: flex;
  justify-self: flex-end;
  right: 0;
  position: absolute;
  margin: 0 2rem;
  z-index: 2;
`