import { useState, useRef, useEffect, useContext } from "react";
import { Button, FormCheck, FormControl, FormGroup, FormLabel, FormText, Form } from "react-bootstrap";
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
    const { login,setloggedinEmail,setloggedinUsername } = useContext(AuthContext);

    const login2 = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(email)
       
        
        const response = await onLogin({
            username,
            password,
            email,
        });
        console.log('Log In attempt');
        // Check if login is successful
        if (response.status === 200) {
            setloggedinEmail(response.data.email);
            setloggedinUsername(response.data.username);
            login();
            if (!isChecked) {
                navigate('/')
            } else {
                navigate('/Checkout')
            }


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
                    <FormText className="text-muted">
                        We'll never share your email with anyone else.
                    </FormText>
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