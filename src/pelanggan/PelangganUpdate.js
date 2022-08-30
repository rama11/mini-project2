import React, { useEffect,useState } from 'react';
import { Button,Form } from 'semantic-ui-react'
import axios from 'axios'

export default function PelangganUpdate () {

    const [nama, setNama] = useState('');
    const [domisili, setDomisili] = useState('');
    const [jenis_kelamin, setJenisKelamin] = useState('');

    const [id, setIDPelanggan] = useState(null);

    useEffect(() => {
            setIDPelanggan(localStorage.getItem('ID Pelanggan'))
            setNama(localStorage.getItem('Nama'));
            setDomisili(localStorage.getItem('Domisili'));
            setJenisKelamin(localStorage.getItem('Jenis Kelamin'))
    }, []);

    const updateAPIData = () => {
        axios.put(`https://mini-project-laravel.herokuapp.com/pelanggan/${id}`, {
            nama,
            domisili,
            jenis_kelamin
        })
    }

    return (
        <div className="main">
            <Form className="create-form">
                <Form.Field>
                    <label>Nama</label>
                    <input value={nama} onChange={(e) => setNama(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Domisili</label>
                    <input value={domisili} onChange={(e) => setDomisili(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Jenis Kelamin</label>
                    <input value={jenis_kelamin} onChange={(e) => setJenisKelamin(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}