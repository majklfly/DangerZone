import React, { useRef } from "react";
import { Carousel } from "antd";
import "./Article.css";
import { useSelector } from "react-redux";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";

function Article(props) {
  const chapterData = useSelector(state => state.chapterReducer);

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
          {chapterData.articles.map((item, index) => {
            return (
              <div key={index}>
                <div className="article_name">{item.name}</div>
                <div className="article_content" data-testid="article-content">
                  {item.content}
                </div>
                <div className="content-container">
                  <div className="articleLeftContainer">
                    <div className="lineIndex">
                      {item.line1 !== null ? item.line1 : null}
                    </div>
                    <div className="lineIndex">
                      {item.line2 !== null ? item.line2 : null}
                    </div>
                    <div className="lineIndex">
                      {item.line3 !== null ? item.line3 : null}
                    </div>
                    <div className="lineIndex">
                      {item.line4 !== null ? item.line4 : null}
                    </div>
                    <div className="lineIndex">
                      {item.line5 !== null ? item.line5 : null}
                    </div>
                  </div>
                  <div className="articleRightContainer">
                    <div className="lineIndex">
                      {item.line6 !== null ? item.line6 : null}
                    </div>
                    <div className="lineIndex">
                      {item.line7 !== null ? item.line7 : null}
                    </div>
                    <div className="lineIndex">
                      {item.line8 !== null ? item.line8 : null}
                    </div>
                    <div className="lineIndex">
                      {item.line9 !== null ? item.line9 : null}
                    </div>
                    <div className="lineIndex">
                      {item.line10 !== null ? item.line10 : null}
                    </div>
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
