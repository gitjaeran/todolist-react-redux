import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteTodo,
  doneTodo,
  workingTodo,
} from "../redux/config/modules/todoList";
import Modal from "./Modal";

const LayoutBox = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard-Regular";
  padding: 20px;
`;

const H2 = styled.h2`
  font-family: "NEXON Lv1 Gothic OTF";
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 15px;
`;
const TodoWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
  padding-bottom: 50px;
`;

const TodoComponent = styled.div`
  font-size: larger;
  font-weight: 500;

  width: 300px;
  height: 170px;

  padding: 25px;

  border: 4px solid rgba(232, 71, 98, 0.27);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-all;
  height: 100px;
`;

const ModalBtn = styled.p`
  font-size: 15px;
  text-align: end;
  color: gray;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const TodoTitle = styled.div`
  font-size: 23px;
  font-weight: bold;
  padding-bottom: 15px;
`;

const TodoContents = styled.div`
  font-size: 18px;
  line-height: 1.2;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  font-size: 14px;

  background-color: white;
  border: 1px solid ${props => props.borderColor};

  border-radius: 10px;
  padding: 10px 45px;

  cursor: pointer;
`;

function TodoListContainer() {
  const [openModal, setOpenModal] = useState(false);
  const [modalList, setModalList] = useState({});

  const handleSetModalList = list => {
    setOpenModal(true);
    setModalList(list);
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const todoList = useSelector(state => state.data);
  const dispatch = useDispatch();

  return (
    <LayoutBox>
      {/* working */}
      <div>
        <H2>🎁 Working</H2>
        <TodoWrap>
          {todoList.map(list => {
            return (
              list.isDone === false && (
                <TodoComponent key={list.id}>
                  <div>
                    <ModalBtn onClick={() => handleSetModalList(list)}>
                      상세보기
                    </ModalBtn>
                  </div>
                  <ListBox>
                    <TodoTitle>{list.title}</TodoTitle>
                    <TodoContents>{list.contents}</TodoContents>
                  </ListBox>
                  <BtnBox>
                    <Btn
                      borderColor="rgba(197, 13, 19, 0.414)"
                      onClick={() => {
                        dispatch(deleteTodo(list.id));
                      }}
                    >
                      삭제하기
                    </Btn>
                    <Btn
                      borderColor="rgba(5, 66, 188, 0.358)"
                      onClick={() => {
                        dispatch(doneTodo(list.id, list.isDone));
                      }}
                    >
                      완료하기
                    </Btn>
                  </BtnBox>
                </TodoComponent>
              )
            );
          })}
        </TodoWrap>
      </div>

      {/* Done */}
      <div>
        <H2>🎉 Done</H2>
        <TodoWrap>
          {todoList.map(list => {
            return (
              list.isDone === true && (
                <TodoComponent key={list.id}>
                  <div>
                    <ModalBtn onClick={() => handleSetModalList(list)}>
                      상세보기
                    </ModalBtn>
                  </div>
                  <ListBox>
                    <TodoTitle>{list.title}</TodoTitle>
                    <TodoContents>{list.contents}</TodoContents>
                  </ListBox>
                  <BtnBox>
                    <Btn
                      borderColor="rgba(197, 13, 19, 0.414)"
                      onClick={() => {
                        dispatch(deleteTodo(list.id));
                      }}
                    >
                      삭제하기
                    </Btn>
                    <Btn
                      borderColor="rgba(8, 100, 8, 0.475)"
                      onClick={() => {
                        dispatch(workingTodo(list.id));
                      }}
                    >
                      되돌리기
                    </Btn>
                  </BtnBox>
                </TodoComponent>
              )
            );
          })}
        </TodoWrap>
      </div>
      {openModal ? (
        <Modal open={openModal} onClose={handleModal} list={modalList} />
      ) : null}
    </LayoutBox>
  );
}

export default TodoListContainer;
