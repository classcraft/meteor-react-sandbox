import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import styled from "@emotion/styled";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

import { Todos } from "./todos";
import { About } from "./about";

const tabs = ["todos", "about"];

const AppContainer = styled.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTab = tabs.findIndex((tab) => location.pathname.includes(tab));

  if (selectedTab < 0) return null;

  const handleNavigate = (tab) => navigate(`/${tab}`);
  const toTab = (tab) => (
    <Tab
      key={tab}
      component="a"
      label={tab}
      onClick={() => handleNavigate(tab)}
    />
  );

  return (
    <Tabs centered value={selectedTab}>
      {tabs.map(toTab)}
    </Tabs>
  );
};

const MainContent = ({ children }) => <Box>{children}</Box>;

export const App = () => {
  return (
    <AppContainer>
      <TopBar />
      <Divider />
      <MainContent>
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="todos" element={<Todos />} />
          <Route path="about" element={<About />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
};
