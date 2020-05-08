import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PDFCertificate from "./PDFCertificate";
import { findByTestAttr, testStore } from "../../utils";
import jsPDF from "jspdf";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("jspdf", () => {
  return function() {
    return {
      addImage: jest.fn(),
      setLineWidth: jest.fn(),
      setDrawColor: jest.fn(),
      line: jest.fn(),
      setFontSize: jest.fn(),
      text: jest.fn(),
      save: jest.fn()
    };
  };
});

describe("PDFCertificate", () => {
  let component;
  beforeEach(() => {
    const store = testStore();
    component = shallow(<PDFCertificate store={store} />)
      .dive()
      .dive();
    return component;
  });

  it("should render the PDF button", () => {
    const button = findByTestAttr(component, "certificateButton");
    expect(button.length).toBe(1);
  });

  it("should show a pdf file to download", () => {
    const button = findByTestAttr(component, "certificateButton");
    // TODO: find a way to check if it starts the download
    button.simulate("click");
  });
});
