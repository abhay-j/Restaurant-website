import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const navItems = [
  { label: "Home", active: true, linkTo: "/" },
  { label: "About", active: false, linkTo: "/about" },
  { label: "Menu", active: false, linkTo: "/menu" },
  
];

function Navbar() {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Logo>
          <LogoImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2d48a6f0387c677587a538ac6c939585d3bc4091e47d94d4595bf216f39f96b?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
            alt="Company Logo"
          />
          <LogoText>photo</LogoText>
        </Logo>
        <NavList>
          {navItems.map((item) => (
            <NavItemLink
              className="NavItem"
              to={item.linkTo}
              key={item.label}
              active={item.active}
            >
              {item.label}
            </NavItemLink>
          ))}
        </NavList>
      </NavWrapper>
      <AuthWrapper>
        <LoginButton to="/login">Login</LoginButton>
        <SignupButton to="signup">Sign up</SignupButton>
      </AuthWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.89);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 65px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.22px;
  text-align: center;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #000;
  white-space: nowrap;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 120px;
  aspect-ratio: 4.14;
  padding: 0 37px;
  font:
    400 28px Comfortaa,
    sans-serif;
  letter-spacing: -0.43px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const LogoImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const LogoText = styled.span`
  position: relative;
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavItem = styled.a`
  background-color: red;
  font-family: Montserrat, sans-serif;
  color: ${(props) => (props.active ? "#ce0b0b" : "inherit")};
`;

const NavItemLink = styled(Link)`
  font-family: Montserrat, sans-serif;
  color: ${(props) => (props.active ? "#ce0b0b" : "inherit")};
  text-decoration: none; /* Remove default underline */
`;

// Styled component for the login button
const LoginButton = styled(NavItemLink)`
  /* Add login button specific styles here */
  font-family: Montserrat, sans-serif;
  color: #000;
  white-space: nowrap;
  padding: 13px 46px;
  border: 1px solid rgba(251, 24, 24, 1);

  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

// Styled component for the signup button
const SignupButton = styled(NavItemLink)`
  /* Add signup button specific styles here */
  font-family: Montserrat, sans-serif;
  color: #fff;
  padding: 13px 37px;

  border: none;
  background-color: #fb1818;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const AuthWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

// const LoginButton = styled.button`
//   font-family: Montserrat, sans-serif;
//   color: #000;
//   white-space: nowrap;
//   padding: 13px 46px;
//   border: 1px solid rgba(251, 24, 24, 1);
//   background-color: #fb1818;
//   cursor: pointer;

//   @media (max-width: 991px) {
//     white-space: initial;
//     padding: 0 20px;
//   }
// `;

// const SignupButton = styled.button`
//   font-family: Montserrat, sans-serif;
//   color: #fff;
//   padding: 13px 37px;
//   border-radius: 6px;
//   border: none;
//   background-color: #fb1818;
//   cursor: pointer;

//   @media (max-width: 991px) {
//     padding: 0 20px;
//   }
// `;

export default Navbar;
