import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SIdebarMenu = ({ item }) => {
  //   console.log(item);

  const [subnavs, setSubNav] = useState(false);
  console.log(subnavs);

  const showSubNav = () => {
    setSubNav(!subnavs);
  };

  return (
    <Container>
      <SidebarPath onClick={showSubNav}>
        <AllWrap>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </AllWrap>
        <SubNavBars>
          {item.subNav && subnavs
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </SubNavBars>
      </SidebarPath>

      {subnavs &&
        item.subNav.map((item, index) => {
          console.log(item);
          return (
            <DropDownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabels>{item.title}</SidebarLabels>
            </DropDownLink>
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

const SidebarPath = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  justify-content: space-between;
  font-size: 25px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: aliceblue;
    border-radius: 30px;
    letter-spacing: 1px;
  }
`;

const AllWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 20px;
`;

const SidebarLabel = styled.span`
  margin-left: 15px;
`;

const SubNavBars = styled.div`
  color: green;
`;

const DropDownLink = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 18px;
  height: 30px;
  margin-left: 20px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  letter-spacing: 1.5px;

  &:hover {
    background-color: aliceblue;
    border-radius: 30px;
    letter-spacing: 1px;
  }
`;

const SidebarLabels = styled.span`
  /* letter-spacing: 1.5px; */
`;

export default SIdebarMenu;
