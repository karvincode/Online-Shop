import { useState, useEffect } from "react";
import { Button, FormControl, FormGroup, FormLabel, Form } from "react-bootstrap";
import { passwordChange } from "../auth.api";
import { AuthContext } from "../../context/AuthContext";

export function Security() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });
  
  const currEmail: string | null = localStorage.getItem('email');
  const currUsername: string | null = localStorage.getItem('username');
  
  // Check if values are null and provide default values
  const email = currEmail !== null ? currEmail : "";
  const username = currUsername !== null ? currUsername : "";
  
  useEffect(() => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      username: username,
      email: email,
    }));
  }, []); // Empty dependency array to run the effect only once
  
  const [message, setMessage] = useState<string>("");
  
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
      <h2>Account Security</h2>
      {message && <p>{message}</p>}
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl type="email" value={credentials.email} readOnly />
        </FormGroup>
        <div style={{ marginTop: '10px' }}>
          <Button variant="primary" type="submit">
            Request Password Reset
          </Button>
        </div>
      </Form>
    </>
  );
}