import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";

import server from "../api/server";

import CustomCard from "./Card";

const Cards = props => {
  const [chapters, setChapters] = useState([]);

  const getChapters = () => {
    server.get("/chapters/").then(res => {
      setChapters(res.data);
    });
  };

  useEffect(getChapters, []);

  return (
    <div style={{ background: "#FF7110", padding: "30px" }}>
      <Row gutter={16}>
        {chapters.map((chapter, index) => {
          return (
            <Col key={index} span={12}>
              <CustomCard
                index={index + 1}
                title={chapter.title}
                description={chapter.description}
              ></CustomCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Cards;
