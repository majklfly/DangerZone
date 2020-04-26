import React from "react";
import { shallow } from "enzyme";
import PDFCertificate from "./PDFCertificate";
import { findByTestAttr, testStore } from "../../utils";
import jsPDF from "jspdf";

jest.mock("jspdf", () => {
  () => {
    addImage = jest.fn();
  };
});

describe("PDFCertificate", () => {
  console.log(jsPDF);
  let component;
  beforeEach(() => {
    const store = testStore();
    component = shallow(<PDFCertificate store={store} />)
      .dive()
      .dive();
  });

  it("should render the PDF button", () => {
    const button = findByTestAttr(component, "certificateButton");
    expect(button.length).toBe(1);
  });

  it("should show a pdf file to download", () => {
    const button = findByTestAttr(component, "certificateButton");
    button.simulate("click");
  });
});
