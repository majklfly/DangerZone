import React from "react";

import { Form, Input, Button } from "antd";
import "./ProfileForm.css";
import server from "../../api/server";

const token = localStorage.getItem("token");

export const ProfileForm = (props) => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    let valuesToUpdate = {};
    try {
      const values = await form.validateFields();
      for (const [key, value] of Object.entries(values)) {
        if (value !== undefined && key === "firstName") {
          valuesToUpdate = { ...valuesToUpdate, firstName: value };
        } else if (value !== undefined && key === "lastName") {
          valuesToUpdate = { ...valuesToUpdate, lastName: value };
        } else if (value !== undefined && key === "company") {
          valuesToUpdate = { ...valuesToUpdate, company: value };
        } else if (value !== undefined && key === "position") {
          valuesToUpdate = { ...valuesToUpdate, position: value };
        } else if (value !== undefined && key === "country") {
          valuesToUpdate = { ...valuesToUpdate, country: value };
        } else if (value !== undefined && key === "twitter") {
          valuesToUpdate = {
            ...valuesToUpdate,
            twitter: `https://twitter.com/${value}`,
          };
        } else if (value !== undefined && key === "facebook") {
          valuesToUpdate = {
            ...valuesToUpdate,
            facebook: `https://facebook.com/${value}`,
          };
        } else if (value !== undefined && key === "instagram") {
          valuesToUpdate = {
            ...valuesToUpdate,
            instagram: `https://instagram.com/${value}`,
          };
        }
      }
      console.log(valuesToUpdate);

      server
        .patch(`/userdata/${props.userId}/`, valuesToUpdate, {
          headers: { authorization: `Token ${token}` },
        })
        .then(window.location.reload());
    } catch (errorInfo) {
      console.log("Failed", errorInfo);
    }
  };

  return (
    <>
      <Form form={form} className="ProfileForm" data-test="ProfileForm">
        <Form.Item className="profileInput" name="firstName">
          <Input placeholder="What is your first name?" />
        </Form.Item>
        <Form.Item className="profileInput" name="lastName">
          <Input placeholder="What is your last name?" />
        </Form.Item>
        <Form.Item className="profileInput" name="company">
          <Input placeholder="What company you work for?" />
        </Form.Item>
        <Form.Item className="profileInput" name="position">
          <Input placeholder="On which position?" />
        </Form.Item>
        <Form.Item className="profileInput" name="country">
          <Input placeholder="Which country you come from?" />
        </Form.Item>
        <Form.Item className="profileInput" name="twitter">
          <Input placeholder="Do you have Twitter account name" />
        </Form.Item>
        <Form.Item className="profileInput" name="facebook">
          <Input placeholder="Or maybe your Facebook account name?" />
        </Form.Item>
        <Form.Item className="profileInput" name="instagram">
          <Input placeholder="C'mon, everybody has instagram" />
        </Form.Item>
        <Button
          type="primary"
          className="profileSubmitButton"
          onClick={onSubmit}
          data-test="profileSubmitButton"
        >
          Please, update my profile
        </Button>
      </Form>
    </>
  );
};
