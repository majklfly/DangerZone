import React from "react";
import Cards from "../../components/Cards/Cards";
import PDFCertificate from "../../components/PDFCertificate/PDFCertificate";
import { Button } from "antd";
import "./ChapterScreen.css";

const ChaptersScreen = () => {
  return (
    <>
      <PDFCertificate />
      <div className="container-cards" data-test="container-cards">
        <Cards className="cards" data-test="cards" />
      </div>
    </>
  );
};

export default ChaptersScreen;
