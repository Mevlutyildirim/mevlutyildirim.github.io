import React from "react";
import Profile from "../components/Profile";
import styled from "styled-components";

export default function Home(props) {
  return (
    <MainStyle>
      <Profile />
    </MainStyle>
  );
}

const MainStyle = styled.main`
  max-width: 800px;
  margin: 10px auto;
`;
