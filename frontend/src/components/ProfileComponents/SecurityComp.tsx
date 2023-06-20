import { useState, useContext } from "react";
import { Button, FormControl, FormGroup, FormLabel, Form } from "react-bootstrap";
import { passwordChange } from "../auth.api";
import { AuthContext } from "../../context/AuthContext";

export function Security() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  const {loggedinEmail} = useContext(AuthContext)
  const [message, setMessage] = useState<string>("");

  const consoleloghelp = () => {
    console.log(loggedinEmail)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await passwordChange({
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
      });
      setMessage(response.message as string);
    } catch (error) {
      setMessage(error as string);
    }
  };

  return (
    <>
    <h2>
                Account Security
    </h2>
      {message && <p>{message}</p>}
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            value={loggedinEmail}
            readOnly
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Request Password Reset
        </Button>
      </Form>
      <button onClick={consoleloghelp}>console</button>
    </>
  );
}