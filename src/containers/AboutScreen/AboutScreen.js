import React from "react";
import "./AboutScreen.css";

const AboutScreen = () => {
  return (
    <div className="AboutScreenContainer" data-test="AboutScreenContainer">
      <h1>DangerZone </h1>
      <h3>
        DangerZone is an open-source free web server created to address the need
        for training food handlers in any type of food production facility.
        Training is split between short courses. Each course ends with a quiz.
        To finish each course anticipate has to answer all five questions. After
        each successfully finished quiz the title of the chapter is added to the
        certificate. Certificate can be generated at any point in the class and
        contains only fully finished courses.
      </h3>
      <h3>
        The content of the courses has been created thanks to the great work of
        extraordinary people in the Food Standard Agency and The Royal Society
        for public health. They managed to establish an outstanding source of
        knowledge for anybody interested in food hygiene standards. This project
        complies with its crown copyright policy and open government license for
        public sector information. The content is and will be free of charge. If
        you are more interested in their work, please visit:
      </h3>
      <div className="AboutLinksContainer">
        <a href="https://www.food.gov.uk/">Food Standards Agency</a>
        <a href="https://www.rsph.org.uk/">Royal Society for public health</a>
        <a href="https://www.medicinenet.com/script/main/hp.asp">MedicineNet</a>
      </div>
      <h3>
        Design of DangerZone has been developed using ReactJS library and
        another work of great amount of contributors cooperating with Lottie and
        Pixabay. Please visit their website and feel free to acknowledge their
        work by donating them as authors of this project did.
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
