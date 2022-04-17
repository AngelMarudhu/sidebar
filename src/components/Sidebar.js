import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SIdebarMenu from "./SIdebarMenu";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const [sideBar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sideBar);
  };

  return (
    <Container>
      <Content>
        <NavIcon to="#">
          <MenuIcon onClick={showSidebar} varient="contained" />
        </NavIcon>
      </Content>

      <SidebarNav sidebar={sideBar}>
        <SidebarWrap>
          <CloseIcons to="#">
            <CloseIcon onClick={showSidebar} />
          </CloseIcons>
          {SidebarData.map((item, index) => {
            return <SIdebarMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  padding: 0;
  margin: 0;
`;

const Content = styled.div`
  width: 100%;
  background-color: black;
  height: 90px;
  color: green;
`;

const NavIcon = styled(Link)`
  width: 100%;
  height: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SidebarNav = styled.nav`
  background-color: yellow;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: all 1s ease-in-out;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const CloseIcons = styled(Link)`
  margin-left: 20px;
  color: green;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export default Sidebar;
