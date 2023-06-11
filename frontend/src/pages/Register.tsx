import React, { useState } from "react";
import { Button, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";
import { onRegister } from "../components/auth.api";
export function Register() {
    const [{username, password,email}, setCredentials] = useState({
        username: '',
        password: '',
        email:''
    })
    const register = async (event: React.FormEvent) => {
        event.preventDefault()
        const response = await onRegister({
            username,
            password,
            email,
        });
        console.log('Register attempt')
    }
    return (
        <>
        <h1>Register</h1>
            <Form onSubmit={register}>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="Enter email" value={email} onChange={(event)=> setCredentials({
                        username,
                        password,
                        email: event.target.value,
                    })} />
                    <FormText className="text-muted">
                        We'll never share your email with anyone else.
                    </FormText>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicUsername">
                    <FormLabel>Username</FormLabel>
                    <FormControl type="username" placeholder="Enter Username" value={username} onChange={(event)=> setCredentials({
                        username: event.target.value,
                        password,
                        email,
                    })} />
                </FormGroup>

                <FormGroup className="mb-3" controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Password" value={password} onChange={(event)=> setCredentials({
                        username,
                        password: event.target.value,
                        email
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