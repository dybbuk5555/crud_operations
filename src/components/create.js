import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Create = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let navigate = useNavigate();

    const postData = () => {
        axios.post('https://62b3138620cad3685c9aa80b.mockapi.io/fakeData', {
            email,
            password,
            checkbox
        }).then(() =>{
            navigate('/read');
        });
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" onChange={() => setCheckbox(!checkbox)} label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={postData} type="submit">
                Create
            </Button>
        </Form>
    );
};

export default Create;