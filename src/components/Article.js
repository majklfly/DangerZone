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
                  <div>
                    <div className="lineIndex">
                      {props.articles[item].line1 !== null
                        ? props.articles[item].line1
                        : null}
                    </div>
                    <div className="lineIndex">
                      {props.articles[item].line2 !== null
                        ? props.articles[item].line2
                        : null}
                    </div>
                    <div className="lineIndex">
                      {props.articles[item].line3 !== null
                        ? props.articles[item].line3
                        : null}
                    </div>
                    <div className="lineIndex">
                      {props.articles[item].line4 !== null
                        ? props.articles[item].line4
                        : null}
                    </div>
                    <div className="lineIndex">
                      {props.articles[item].line5 !== null
                        ? props.articles[item].line5
                        : null}
                    </div>
                    <div className="lineIndex">
                      {props.articles[item].line6 !== null
                        ? props.articles[item].line6
                        : null}
                    </div>
                    <div className="lineIndex">
                      {props.articles[item].line7 !== null
                        ? props.articles[item].line7
                        : null}
                    </div>
                    <div className="lineIndex">
                      {props.articles[item].line8 !== null
                        ? props.articles[item].line8
                        : null}
                    </div>
                    <div className="lineIndex">
                      {props.articles[item].line9 !== null
                        ? props.articles[item].line9
                        : null}
                    </div>
                    <div className="lineIndex">
                      {props.articles[item].line10 !== null
                        ? props.articles[item].line10
                        : null}
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
