import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils";
import CertificateScreen from "../CertificateScreen/CertificateScreen";

const setUp = () => {
  const wrapper = shallow(<CertificateScreen />);

  return wrapper;
};

describe("CertificateScreen", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render the container", () => {
    const container = findByTestAttr(wrapper, "CertificateScreenContainer");
    expect(container.length).toBe(1);
  });
});
