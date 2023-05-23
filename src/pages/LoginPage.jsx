import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Col, Container, Row ,Form as BootstrapForm} from "react-bootstrap";
import "./formik.css"       

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Name must be 50 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(/@code.edu.az$/, "must contain code.edu.az domain")
    .required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, " must contain at least one uppercase letter")
    .required("Password is required"),
});
const LoginPage = () => {
  return (
    <Container className="container">
        
        <Row className="row">
            <Col md={{ span: 3, offset: 3 }}>
    <Formik className="formik"
      initialValues={{
        name: "",
        email: "",
        password: ""
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors }) => (
        <Form className="form">
            <h1>Signup</h1>
              <BootstrapForm.Group controlId="name">
            <BootstrapForm.Label>Name:</BootstrapForm.Label>
          <Field type="text" id="name" name="name" />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}</BootstrapForm.Group>
          <BootstrapForm.Group controlId="email">
          <BootstrapForm.Label>Email:</BootstrapForm.Label>

          <Field type="email" id="email" name="email" />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}</BootstrapForm.Group>
          <BootstrapForm.Group controlId="password">
            <BootstrapForm.Label>Password:</BootstrapForm.Label>
          <Field type="password" id="password" name="password" />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}</BootstrapForm.Group>

    
    <Button variant="secondary" type="submit" className="button">Registration</Button>
        </Form>
      )}
    </Formik>
    </Col>
    </Row>
    </Container>
  );
};

export default LoginPage;
