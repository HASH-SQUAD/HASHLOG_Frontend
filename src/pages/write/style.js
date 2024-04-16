import styled from "styled-components";

export const Write_Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Write_Line = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #eeeeee;
`;

export const Write_Write = styled.div`
  /* overflow: scroll; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  float: left;
  flex-direction: column;
`;

export const Write_TitleInput = styled.textarea`
  width: 90%;
  border-style: none;
  outline: none;
  padding: 30px 0 20px 20px;
  font-size: 3rem;
  resize: none;
  word-spacing: -20px;
`;
export const Write_View = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f5f5;
  float: right;
`;

export const Write_FooterLayout = styled.div `
  width: 100%;
  height: 100vh;
`

export const Write_footer = styled.div`
  width: 50%;
  height: 80px;
  box-shadow: #d9d9d9 0px 0px 8px 0;
  bottom: 0px;
  position: fixed;
  z-index: 5;
`;
