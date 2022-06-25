import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Read() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get('https://62b3138620cad3685c9aa80b.mockapi.io/fakeData')
            .then((res) => {
                setAPIData(res.data);
            });
    }, []);

    const setData = (data) => {
        let { id, email, password, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Email', email);
        localStorage.setItem('Pasword', password);
        localStorage.setItem('Checkbox', checkbox);
    }

    const getData = () => {
        axios.get('https://62b3138620cad3685c9aa80b.mockapi.io/fakeData')
            .then((res) => {
                setAPIData(res.data);
            });
    }

    const onDelete = (id) => {
        axios.delete(`https://62b3138620cad3685c9aa80b.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData();
            });

    };

    return (
        <div>
            <Table className='read-table' striped bordered hover variant='black'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Checkbox</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {(APIData !== null) ? APIData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                                <td>{(data.checkbox) ? 'checked' : 'Unchecked'}</td>
                                <td>
                                    <Link to='/update'>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </td>
                            </tr>
                        );
                    }) : null}
                </tbody>
            </Table>
        </div>
    )
}