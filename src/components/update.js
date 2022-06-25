import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Update = () => {
    const [id, setID] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let navigate = useNavigate();

    useEffect (() => {
        setID(localStorage.getItem('ID'));
        setEmail(localStorage.getItem('Email'));
        setPassword(localStorage.getItem('Password'));
        setCheckbox(localStorage.getItem('Checkbox'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://62b3138620cad3685c9aa80b.mockapi.io/fakeData/${id}`, {
            email,
            password,
            checkbox
        }).then(() => {
            navigate('/read');
        });
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={updateAPIData} type="submit">
                Update
            </Button>
        </Form>
    );
};

export default Update;