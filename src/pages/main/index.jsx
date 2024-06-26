import React from "react";
import Header from "../../components/header/";
import beaner from "../../assets/InstaSplitPoster.jpg";
import Content from "../../components/content";
import data from "../../data/contents";
import Footer from "../../components/footer"
import * as _ from "./style";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const history = useNavigate();
  return (
    <div>       
      <Header />
      <_.Main_Layout>
      <img
        src={beaner}
        alt="Beaner"
        style={{ width: "100%", height: "auto" }}
      />
      <_.Main_Write_Button onClick={() => {history('/write')}}>글쓰기</_.Main_Write_Button>
        <_.Main_Contents>
        {data.map((item) => (
          <Content img={item.imgURL} date={item.date} title={item.title}
          desc={item.desc}/>
          ))}
        </_.Main_Contents>
      </_.Main_Layout>
        <Footer/>
    </div>
  )
      }

export default Main;