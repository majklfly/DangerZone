import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Col, Row } from "antd";

const Cards = props => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/chapterone/");
  };

  return (
    <div style={{ background: "#FF7110", padding: "30px" }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            style={{ width: 300 }}
            title="Chapter 1"
            bordered={true}
            hoverable
            onClick={handleClick}
          >
            Introduction
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ width: 300 }}
            title="Chapter 2"
            bordered={true}
            hoverable
          >
            HACCP
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ width: 300 }}
            title="Chapter 3"
            bordered={true}
            hoverable
          >
            Bacteria
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
