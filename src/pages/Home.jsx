import React from "react";
import CreateTodo from "../components/CreateTodo";
import Header from "../components/Header";
import TodoListContainer from "../components/TodoListContainer";
import styled from "styled-components";

const LayoutBox = styled.div`
  @font-face {
    font-family: "NEXON Lv1 Gothic OTF";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "NEXON Lv1 Gothic OTF";
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <LayoutBox>
      <Header />
      <CreateTodo />
      <TodoListContainer />
    </LayoutBox>
  );
};

export default Home;
