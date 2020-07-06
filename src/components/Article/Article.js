import React, { useRef } from "react";
import { Carousel } from "antd";
import "./Article.css";
import { Spin } from "antd";
import { ArticleLayoutOne } from "./ArticleLayoutOne/ArticleLayoutOne";
import { ArticleLayoutTwo } from "./ArticleLayoutTwo/ArticleLayoutTwo";
import { ArticleLayoutThree } from "./ArticleLayoutThree/ArticleLayoutThree";
import { ArticleLayoutFour } from "./ArticleLayoutFour/ArticleLayoutFour";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";

function Article(props) {
  const ref = useRef();

  const toggleNext = () => {
    ref.current.slick.slickNext();
  };

  const togglePrevious = () => {
    ref.current.slick.slickPrev();
  };

  if (props.articles === undefined) {
    return <Spin size="large" className="articleSpinner" />;
  }

  return (
    <div className="container-article" data-test="articleContainer">
      <LeftOutlined
        className="leftoutlined"
        data-test="articleToggleLeft"
        onClick={togglePrevious}
      />
      <Carousel
        className="carouselArticle"
        data-test="articleCarousel"
        ref={ref}
        dots={false}
      >
        {props.articles.map((item, index) => {
          return (
            <>
              {item.id === 3 && <ArticleLayoutOne data={item} key={index} />}
              {item.id === 4 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 5 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 6 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 7 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 25 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 26 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 27 && <ArticleLayoutOne data={item} key={index} />}
              {item.id === 28 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 29 && <ArticleLayoutOne data={item} key={index} />}
              {item.id === 30 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 31 && <ArticleLayoutFour data={item} key={index} />}
            </>
          );
        })}
      </Carousel>
      <RightOutlined
        className="rightoutlined"
        onClick={toggleNext}
        data-test="articleToggleRight"
      />
    </div>
  );
}

export default Article;
