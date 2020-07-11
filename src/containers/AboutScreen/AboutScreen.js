import React from "react";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <div className="AboutScreenContainer">
      <h1>DangerZone </h1>
      <h3>
        DangerZone is open source free webserver developed to address need of
        training food handlers and generally people working in gastronomy.
        Training is split between short courses. Each courses ends with a quiz.
        To finish the course anticipant has to corretly answer all five
        questions. After each successfully finished quiz there is a name of the
        chapter added to the certificate. Certificate can be generated in any
        point of the class and contains only fully finished courses.
      </h3>
      <h3>
        Content of the courses has been created thanks to great work of amazing
        people in Food Standard Agency and Royal Society for public health. They
        managed to establish an outstanding source of knowledge for anybody who
        is interested in food hygiene standards. This project complies with
        their crown copyright policy and open government licence for public
        sector information. The content is and will be free of charge. If you
        are more interested in their work, please visit:
      </h3>
      <div className="AboutLinksContainer">
        <a href="https://www.food.gov.uk/">Food Standards Agency</a>
        <a href="https://www.rsph.org.uk/">Royal Society for public health</a>
        <a href="https://www.medicinenet.com/script/main/hp.asp">MedicineNet</a>
      </div>
      <h3>
        Desing of DangerZone has been developed using ReactJS library and
        another tremendous work of great amount of contributors cooperating with
        Lottie and Pixabay. Please visit their website and feel free to
        acknowledge their work by donating them as authors of this project did.
      </h3>
      <div className="AboutImgContainer">
        <a href="https://pixabay.com/">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/17/14/44/pixabay-1987090_1280.png"
            alt="pixabay"
            className="AboutLinksImg"
          />
        </a>
        <a href="https://pixabay.com/">
          <img
            src="https://lordicon.com/assets/pictures/lottiefiles.png"
            alt="pixabay"
            className="AboutLinksImg"
          />
        </a>
      </div>
    </div>
  );
};

export default AboutScreen;
