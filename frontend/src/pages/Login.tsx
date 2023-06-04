import { useState, useRef, useEffect } from "react";
import { Button, FormCheck, FormControl, FormGroup, FormLabel, FormText, Form } from "react-bootstrap";
import { onLogin } from "../components/auth.api";
import React from "react";


export function Login() {
    const [{username, password}, setCredentials] = useState({
        username: '',
        password: ''
    })
    const login = async (event: React.FormEvent) => {
        event.preventDefault()
        const response = await onLogin({
            username,
            password
        })
        console.log('Log In attempt')

    }
    return (
        <>
        <h1>Login</h1>
            <Form onSubmit={login}>
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
                    Submit
                </Button>
            </Form>
            </>
    );
}