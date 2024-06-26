import Header from "../../components/header";
import React, { useState, useMemo } from "react";
import * as _ from "./style.js";
import "./style.css";
import ReactQuill from "react-quill";
import back from "../../assets/back.svg";


const Write = () => {
  const [userName, setUserName] = useState("강민지님");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const returnPage = (e) => {
    
  }
  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };
  const handleContentChange = (e) => {
    setContent(e);
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }, { header: "3" }, { header: "4" }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      },
    };
  }, []);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "image",
    "link",
    "ordered",
    "bullet",
  ];

  return (
    <>
      <Header userName={userName} />
      <_.Write_Line />
      <_.Write_Layout>
        <_.Write_Write>
          <_.Write_TitleInput
            type="text"
            value={title}
            maxLength="50"
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
          />
          <_.Write_TitleLine />
          <ReactQuill
            style={{ width: "100%", height: "calc(100% - 100px)" }}
            modules={modules}
            formats={formats}
            onChange={handleContentChange}
            value={content}
          />
          <_.Write_FooterLayout>
            <_.Write_Footer>
              <_.Write_BackButton src={back}></_.Write_BackButton>
              <_.Write_WriteButton>
                글쓰기
              </_.Write_WriteButton>
            </_.Write_Footer>
          </_.Write_FooterLayout>
        </_.Write_Write>
        <_.Write_View>
          <_.Write_ViewTitle>{title}</_.Write_ViewTitle>
          <_.Write_ViewContent
            dangerouslySetInnerHTML={{ __html: content }}
          ></_.Write_ViewContent>
        </_.Write_View>
      </_.Write_Layout>
    </>
  );
};

export default Write;
