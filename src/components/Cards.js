import React, { useEffect, useState, useContext } from "react";
import { Col, Row } from "antd";

import { LoadingOutlined } from "@ant-design/icons";

import server from "../api/server";
import CustomCard from "./Card";
import { UserDataContext } from "../context/UserDataContext";

import "./Cards.scss";

const Cards = props => {
  const [chapters, setChapters] = useState([]);
  const { userData } = useContext(UserDataContext);

  console.log(userData.chapterTitle);

  const getActiveChapters = () => {
    const activeChapters = [];
    console.log("active chapters", activeChapters);
  };

  const getChapters = () => {
    server.get("/chapters/").then(res => {
      setChapters(res.data);
    });
  };

  useEffect(() => {
    getChapters();
    getActiveChapters();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {props.loading ? (
        <LoadingOutlined />
      ) : (
        <div className="container">
          <Row gutter={[24, 16]}>
            {chapters.map((chapter, index) => {
              return (
                <Col key={index} span={8}>
                  {chapter.title === userData.chapterTitle ? (
                    <CustomCard
                      bordered={true}
                      index={index + 1}
                      title={chapter.title}
                      description={chapter.description}
                      id={chapter.id}
                    ></CustomCard>
                  ) : (
                    <CustomCard
                      bordered={false}
                      index={index + 1}
                      title={chapter.title}
                      description={chapter.description}
                      id={chapter.id}
                    ></CustomCard>
                  )}
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </>
  );
};

export default Cards;
