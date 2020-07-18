import React from "react";
import "./CertificateScreen.css";
import PDFCertificate from "../../components/PDFCertificate/PDFCertificate";

const CertificateScreeen = () => {
  return (
    <div className="CertificateScreenContainer">
      <div className="CertificateScreenText">
        <h2>
          Please be adviced, that the certificate is possible to download only
          after finishing at least one course.
        </h2>
        <h2>
          However, after finishing first course, you are able to download your
          certificate in any point of your studies. All successfully finished
          courses are added to your certificate.
        </h2>
        <h2>
          You will need to provide us with your first and last name at your
          profile page to generate your certificate.
        </h2>
      </div>
      <div className="PDFButtonContainer">
        <PDFCertificate />
      </div>
    </div>
  );
};

export default CertificateScreeen;
