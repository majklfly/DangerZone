import React, { useContext } from "react";

import { Form, Input, Button } from "antd";
import "./ProfileForm.scss";
import server from "../api/server";

export const ProfileForm = props => {
  const [form] = Form.useForm();

  // const onSubmit = async () => {
  //   try {
  //     const values = await form.validateFields();
  //
  //     server
  //       .patch(`/profile/${profileId}/`, {
  //         facebook: "https://www.facebook.com/" + values.facebook,
  //         twitter: "https://twitter.com/" + values.twitter,
  //         instagram: "https://www.instagram.com/" + values.instagram
  //       })
  //       .then(window.location.reload());
  //   } catch (errorInfo) {
  //     console.log("Failed", errorInfo);
  //   }
  // };

  return (
    <>
      <Form form={form} className="ProfileForm">
        <Form.Item className="profileInput" name="twitter">
          <Input placeholder="Tell me your Twitter account name" />
        </Form.Item>
        <Form.Item className="profileInput" name="facebook">
          <Input placeholder="Or maybe your Facebook account name?" />
        </Form.Item>
        <Form.Item className="profileInput" name="instagram">
          <Input placeholder="C'mon, everybody has instagram account" />
        </Form.Item>
        <Button
          type="primary"
          className="profileSubmitButton"
          onClick={() => {}}
        >
          Please, update my profile
        </Button>
      </Form>
    </>
  );
};
