import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

export default function PelangganCreate() {
    const [nama, setName] = useState('');
    const [domisili, setDomisili] = useState('');
    const [jenis_kelamin, setJenisKelamin] = useState('');

    const postData = () => {
        axios.post(`https://mini-project-laravel.herokuapp.com/pelanggan`, {
            nama,
            domisili,
            jenis_kelamin
        })
	}

    return (
    	<div className="main">
	        <div>
	            <Form className="create-form">
	                <Form.Field>
	                    <label>Nama</label>
	                    <input placeholder='Budi' onChange={(e) => setName(e.target.value)} />
	                </Form.Field>
	                <Form.Field>
	                    <label>Domisili</label>
	                    <input placeholder='JAK-SEL' onChange={(e) => setDomisili(e.target.value)} />
	                </Form.Field>
	                <Form.Field>
	                    <label>Jenis Kelamin</label>
	                    <input placeholder='PRIA' onChange={(e) => setJenisKelamin(e.target.value)} />
	                </Form.Field>
	                <Button onClick={postData} type='submit'>Submit</Button>
	            </Form>
	        </div>
		</div>
    )
}