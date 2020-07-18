import React, { useEffect, useState } from "react";
import "./VocabularyOfDay.css";
import server from "../../api/server";
import { Update } from "../LottieAnimations/LottieAnimations";

const token = localStorage.getItem("token");

export const VocabularyOfDay = () => {
  const [word, setWord] = useState(undefined);
  const [definition, setDefinition] = useState(undefined);
  const [source, setSource] = useState(undefined);
  const [active, setActive] = useState(false);

  const generateWord = (array) => {
    let generatedIndex = Math.floor(Math.random() * array.length);
    array.map((item, index) => {
      if (index === generatedIndex && item.word !== word) {
        setWord(item.word);
        setDefinition(item.description);
        setSource(item.source);
      }
      return null;
    });
  };

  const fetchData = async () => {
    const response = await server.get("/wordsoftheday/", {
      headers: { authorization: `Token ${token}` },
    });
    response.status === 200 && generateWord(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line

  if (active === true) {
    setTimeout(function () {
      setActive(false);
    }, 1000);
  }

  const pickNewWord = () => {
    setActive(true);
    fetchData();
  };

  return (
    <div className="VocabularyOfDayContainer">
      <div className="updateIcon" onClick={() => pickNewWord()}>
        <Update active={active} setActive={setActive} />
      </div>
      <h1>{word}</h1>
      <h3>{definition}</h3>
      <a href={source}>source</a>
    </div>
  );
};
