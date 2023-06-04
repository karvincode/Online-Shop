import React, { useState } from "react";
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";
import { onRegister } from "../components/auth.api";
export function Register() {
    const [{username, password}, setCredentials] = useState({
        username: '',
        password: ''
    })
    const register = async (event: React.FormEvent) => {
        event.preventDefault()
        const response = await onRegister({
            username,
            password
        })
        console.log('Log In attempt')
    }
    return (
        <>
        <h1>Register</h1>
            <Form onSubmit={register}>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="Enter email" value={username} onChange={(event)=> setCredentials({
                        username: event.target.value,
                        password
                    })} />
                    <FormText className="text-muted">
                        We'll never share your email with anyone else.
                    </FormText>
                </FormGroup>

                <FormGroup className="mb-3" controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Password" value={password} onChange={(event)=> setCredentials({
                        username,
                        password: event.target.value
                    })} />
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="Check me out" />
                </FormGroup>
                <Button variant="primary" type="submit">
                    Register
                </Button>   
            </Form>

            </>
    );
}