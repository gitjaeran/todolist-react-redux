import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  font-size: 17px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  border: 1px solid rgba(128, 128, 128, 0.117);
  border-radius: 10px;
`;

function Header() {
  return (
    <HeaderBox>
      <div>My Todo List</div>
      <div>React + Redux + Styled-components</div>
    </HeaderBox>
  );
}

export default Header;
