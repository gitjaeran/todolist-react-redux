import React from "react";
import styled from "styled-components";

const DetailContainer = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  font-family: "Pretendard-Regular";
  font-size: large;
  width: 1200px;
  height: 920px;
  background-color: white;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DetailWrap = styled.div`
  width: 500px;
  height: 500px;

  border: 2px solid rgba(232, 71, 98, 0.27);
  border-radius: 10px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 15px;
  color: gray;
`;

const BackBtn = styled.p`
  cursor: pointer;
`;

const Line = styled.div`
  border: 1px solid rgba(232, 71, 98, 0.27);
`;

const TodoDetail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Title = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
`;

const Contents = styled.div`
  font-size: 25px;
  line-height: 1.5;
  word-break: break-all;
`;

function Modal({ open, onClose, list }) {
  if (!open) return null;

  return (
    <DetailContainer>
      <DetailWrap>
        <DetailHeader>
          <p>ID: {list.id}</p>
          <BackBtn onClick={onClose}>돌아가기</BackBtn>
        </DetailHeader>
        <Line></Line>
        <TodoDetail>
          <div>
            <Title>제목</Title>
            <Contents>{list.title}</Contents>
          </div>
          <div>
            <Title>내용</Title>
            <Contents>{list.contents}</Contents>
          </div>
        </TodoDetail>
      </DetailWrap>
      {/* {listId === false && (
      )} */}

      {/* {listId.id === true && (
        <DetailWrap>
          <DetailHeader>
            <p>ID: {trueList.id}</p>
            <BackBtn onClick={onClose}>돌아가기</BackBtn>
          </DetailHeader>
          <Line></Line>
          <TodoDetail>
            <div>
              <Title>제목</Title>
              <Contents>{trueList.title}</Contents>
            </div>
            <div>
              <Title>내용</Title>
              <Contents>{trueList.contents}</Contents>
            </div>
          </TodoDetail>
        </DetailWrap>
      )} */}
    </DetailContainer>
  );
}

export default Modal;
