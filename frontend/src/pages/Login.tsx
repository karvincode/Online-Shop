import { useState, useRef, useEffect, useContext } from "react";
import { Button, FormCheck, FormControl, FormGroup, FormLabel, FormText, Form, Alert } from "react-bootstrap";
import { onLogin } from "../components/auth.api";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import React from "react";


export function Login() {
    const [{ username, password, email }, setCredentials] = useState({
        username: '',
        password: '',
        email: '',
    });
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsChecked(event.target.checked);
    };
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [loginFail, setLoginFailure] = useState(false);
    const [message, setMessage] = useState<string>("");
    const login2 = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await onLogin({
            username,
            password,
            email,
        });
        console.log('Log In attempt');
        // Check if login is successful
        if (response.status === 200) {
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('email', response.data.email);
            login();
            if (!isChecked) {
                navigate('/')
            } else {
                navigate('/Checkout')
            }
        } else{
            setLoginFailure(true)
            setMessage(response)
        };
    }
    return (
        <>
            <h1>Login</h1>
            <Form onSubmit={login2}>
                <FormGroup className="mb-3" controlId="formBasicUsername">
                    <FormLabel>Username</FormLabel>
                    <FormControl
                        type="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(event) =>
                            setCredentials({
                                username: event.target.value,
                                password,
                                email,
                            })
                        }
                    />
                </FormGroup>

                <FormGroup className="mb-3" controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) =>
                            setCredentials({
                                username,
                                password: event.target.value,
                                email,
                            })
                        }
                    />
                </FormGroup>
                {loginFail ? (
                <>
                    <Alert variant="danger">{message}</Alert>
                </>
                ):
                ( <></> )}
                <FormGroup className="mb-3" controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="Check me out" checked={isChecked} onChange={handleCheckboxChange} />
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}