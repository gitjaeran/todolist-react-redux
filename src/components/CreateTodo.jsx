import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTodo } from "../redux/config/modules/todoList";

const AddContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 25px;
  background-color: rgba(128, 128, 128, 0.117);
  border-radius: 10px;
`;

const AddInputBox = styled.div`
  font-size: large;
  display: flex;
  align-items: center;
  gap: 25px;
`;

const AddInput = styled.div`
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const TitleInput = styled.input`
  font-size: large;
  width: 250px;
  height: 30px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
`;

const ContentsInput = styled.input`
  font-size: large;
  width: 350px;
  height: 30px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
`;

const AddBtn = styled.button`
  font-size: 15px;
  font-weight: bold;
  color: rgb(232, 230, 230);

  background-color: rgb(232, 71, 98);

  border: none;
  border-radius: 10px;
  padding: 12px 45px;

  cursor: pointer;
`;

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();

  return (
    <AddContainer>
      <AddInputBox>
        <AddInput>
          <label>제목</label>
          <TitleInput
            maxLength="15"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </AddInput>
        <AddInput>
          <label>내용</label>
          <ContentsInput
            maxLength="57"
            value={contents}
            onChange={e => {
              setContents(e.target.value);
            }}
          />
        </AddInput>
      </AddInputBox>

      <div>
        <AddBtn
          onClick={e => {
            if (!title || !contents) {
              alert("제목과 내용을 작성해주세요!");
            } else {
              dispatch(
                createTodo({
                  id: Date.now(),
                  title,
                  contents,
                  isDone: false,
                })
              ); //dispatch
              setTitle("");
              setContents("");
            }
            e.preventDefault();
          }}
        >
          추가하기
        </AddBtn>
      </div>
    </AddContainer>
  );
}

export default CreateTodo;
