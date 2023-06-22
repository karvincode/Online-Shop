import React, { useState } from "react";
import { Alert, Button, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";
import { onRegister } from "../components/auth.api";

export function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [registerSuccess, setRegisterSuccess] = useState(true);
  const [registerError, setRegisterError] = useState<string>("");

  const register = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onRegister(credentials);
    if (!response ) {
        setRegisterSuccess(false);
        // Handle successful registration
    } else {
        // Handle registration failure
        setRegisterError(response)
  }
  };

  return (
    <>
      {registerSuccess ? (
        <>
          <h1>Register</h1>
          <Form onSubmit={register}>
            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Email address</FormLabel>
              <FormControl
                type="email"
                placeholder="Enter email"
                value={credentials.email}
                onChange={(event) =>
                  setCredentials((prevCredentials) => ({
                    ...prevCredentials,
                    email: event.target.value
                  }))
                }
              />
              <FormText className="text-muted">
                We'll never share your email with anyone else.
              </FormText>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formBasicUsername">
              <FormLabel>Username</FormLabel>
              <FormControl
                type="username"
                placeholder="Enter Username"
                value={credentials.username}
                onChange={(event) =>
                  setCredentials((prevCredentials) => ({
                    ...prevCredentials,
                    username: event.target.value
                  }))
                }
              />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicPassword">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(event) =>
                  setCredentials((prevCredentials) => ({
                    ...prevCredentials,
                    password: event.target.value
                  }))
                }
              />
            </FormGroup>
            {registerError && <Alert variant="danger">{registerError}</Alert>}

            <FormGroup className="mb-3" controlId="formBasicCheckbox">
              <FormCheck type="checkbox" label="Check me out" />
            </FormGroup>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </>
      ) : (
        <>
        {<Alert variant="success">Register Success</Alert>}
        </>
      )}
    </>
  );
}