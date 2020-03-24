import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";

import server from "../api/server";
import CustomCard from "./Card";

import "./Cards.scss";

const Cards = props => {
  const [chapters, setChapters] = useState([]);

  const getChapters = () => {
    server.get("/chapters/").then(res => {
      setChapters(res.data);
    });
  };

  useEffect(getChapters, []);

  return (
    <div className="container">
      <Row gutter={[24, 16]}>
        {chapters.map((chapter, index) => {
          return (
            <Col key={index} span={8}>
              <CustomCard
                index={index + 1}
                title={chapter.title}
                description={chapter.description}
                id={chapter.id}
              ></CustomCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Cards;
