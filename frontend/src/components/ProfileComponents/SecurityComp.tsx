import { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel, Form } from "react-bootstrap";
import { passwordChange } from "../auth.api";

export function Security() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await passwordChange({
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
      });
      setMessage(response as string);
    } catch (error) {
      setMessage(error as string);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            value={credentials.email}
            readOnly
          />
        </FormGroup>
        {message && <p>{message}</p>}
        <Button variant="primary" type="submit">
          Request Password Reset
        </Button>
      </Form>
    </>
  );
}