import React, { useState } from "react";
import styled from "styled-components";

function MenuContainerComponent({ activeTab, onTabClick }) {
  // const [activeTab, setActiveTab] = useState("All");

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  return (
    <MenuContainer>
      <Div2>
        <Div3>MENU:</Div3>
        <Div4>
          <Div5>
            <Div6Styled
              onClick={() => onTabClick("All")}
              active={activeTab === "All"}
            >
              All
            </Div6Styled>
            <Div7Styled
              onClick={() => onTabClick("Vegan")}
              active={activeTab === "Vegan"}
            >
              Vegan
            </Div7Styled>
            <Div8Styled
              onClick={() => onTabClick("Gluten free")}
              active={activeTab === "Gluten free"}
            >
              Gluten free
            </Div8Styled>
            <Div9Styled
              onClick={() => onTabClick("Allergy Free menu")}
              active={activeTab === "Allergy Free menu"}
            >
              Allergy Free menu
            </Div9Styled>
          </Div5>
        </Div4>
      </Div2>
    </MenuContainer>
  );
}

// Styled components for MenuContainer
const MenuContainer = styled.div`
  align-items: center;
  border-radius: 30px 30px 0px 0px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 80px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  display: flex;
  margin-top: 23px;
  width: 100%;
  max-width: 1187px;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  color: #000;
  letter-spacing: -0.75px;
  font:
    400 50px/72% Habibi,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Div4 = styled.div`
  align-items: start;
  border-radius: 12px 12px 0px 0px;
  background-color: #000;
  display: flex;
  margin-top: 72px;
  flex-direction: column;
  font-size: 18px;
  color: var(--Dark, #222);
  font-weight: 500;
  justify-content: center;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
    margin-top: 40px;
  }
`;

const Div5 = styled.div`
  display: flex;
  gap: 0px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const DivStyled = styled.div`
  font-family:
    DM Sans,
    sans-serif;
  justify-content: center;
  border-radius: 12px 12px 0px 0px;
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-top-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  white-space: nowrap;
  padding: 20px 32px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    `
    background-color: #fb1818;
    color: #fff;
  `}

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div6Styled = styled(DivStyled)`
  background-color: ${(props) => (props.active ? "#fb1818" : "#f3f3f3")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
`;

const Div7Styled = styled(DivStyled)`
  background-color: ${(props) => (props.active ? "#fb1818" : "#f2f2f2")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
`;

const Div8Styled = styled(DivStyled)`
  background-color: ${(props) => (props.active ? "#fb1818" : "#f3f3f3")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
`;

const Div9Styled = styled(DivStyled)`
  background-color: ${(props) => (props.active ? "#fb1818" : "#f2f2f2")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
`;

export default MenuContainerComponent;
