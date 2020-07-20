import React, { useRef } from "react";
import { Carousel } from "antd";
import "./Article.css";
import { Spin } from "antd";
import { ArticleLayoutOne } from "./ArticleLayoutOne/ArticleLayoutOne";
import { ArticleLayoutTwo } from "./ArticleLayoutTwo/ArticleLayoutTwo";
import { ArticleLayoutThree } from "./ArticleLayoutThree/ArticleLayoutThree";
import { ArticleLayoutFour } from "./ArticleLayoutFour/ArticleLayoutFour";
import { ArticleLayoutFive } from "./ArticleLayoutFive/ArticleLayoutFive";

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
    return (
      <Spin
        size="large"
        className="articleSpinner"
        data-test="articleSpinner"
      />
    );
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
            <div key={index}>
              {item.id === 3 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 4 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 5 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 6 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 7 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 8 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 9 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 10 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 11 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 12 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 13 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 14 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 15 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 16 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 17 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 18 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 19 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 20 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 21 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 22 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 23 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 24 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 25 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 26 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 27 && <ArticleLayoutOne data={item} key={index} />}
              {item.id === 28 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 29 && <ArticleLayoutOne data={item} key={index} />}
              {item.id === 30 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 31 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 32 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 33 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 34 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 35 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 36 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 37 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 41 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 42 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 43 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 44 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 45 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 46 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 47 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 48 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 49 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 50 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 51 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 52 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 53 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 54 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 55 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 56 && <ArticleLayoutFour data={item} key={index} />}
              {item.id === 57 && <ArticleLayoutThree data={item} key={index} />}
              {item.id === 58 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 59 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 60 && <ArticleLayoutFive data={item} key={index} />}
              {item.id === 61 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 62 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 63 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 64 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 65 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 66 && <ArticleLayoutTwo data={item} key={index} />}
              {item.id === 67 && <ArticleLayoutTwo data={item} key={index} />}
            </div>
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
