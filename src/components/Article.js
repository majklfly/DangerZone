import React, { useRef } from "react";
import { Carousel } from "antd";
import "./Article.scss";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";

function Article(props) {
  const ref = useRef();

  const toggleNext = () => {
    ref.current.slick.slickNext();
  };

  const togglePrevious = () => {
    ref.current.slick.slickPrev();
  };

  return (
    <>
      <div className="container-article">
        <RightOutlined className="rightoutlined" onClick={toggleNext} />
        <Carousel className="container-carousel" ref={ref} dots={false}>
          {Object.keys(props.articles).map((item, index) => {
            return (
              <div key={index}>
                <div className="article_name">{props.articles[item].name}</div>
                <div className="content-container">
                  <div className="article_content">
                    {props.articles[item].content}
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <LeftOutlined className="leftoutlined" onClick={togglePrevious} />
      </div>
    </>
  );
}

export default Article;
