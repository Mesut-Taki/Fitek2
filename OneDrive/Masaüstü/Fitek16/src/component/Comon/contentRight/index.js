import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "./index.styles";

const Login = () => {
  return (
    <Form style={{ backgroundColor: "#AFEEEE", padding: "5% " }}>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          autoFocus="autofocus"
          placeholder="Username"
        />
        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      </Form.Group>
      <Button variant="dark" size="lg" type="submit">
        GİRİŞ
      </Button>
    </Form>
  );
};

export default Login;
// ip 192.168.1.152
// port 1434
// Veritabanı SDB_MAIN
// kullanıcı adı sa
// şifre Ymp@Adm123
// kullanıcılar tablosu Employee
