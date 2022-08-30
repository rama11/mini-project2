import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

export default function BarangCreate() {
    const [nama, setNama] = useState('');
    const [kategori, setKategori] = useState('');
    const [harga, setHarga] = useState('');

    const postData = () => {
        axios.post(`https://mini-project-laravel.herokuapp.com/barang`, {
            nama,
            kategori,
            harga
        })
	}

    return (
    	<div className="main">
	        <div>
	            <Form className="create-form">
	                <Form.Field>
	                    <label>Nama</label>
	                    <input placeholder='Pensil' onChange={(e) => setNama(e.target.value)} />
	                </Form.Field>
	                <Form.Field>
	                    <label>Kategori</label>
	                    <input placeholder='ATK' onChange={(e) => setKategori(e.target.value)} />
	                </Form.Field>
	                <Form.Field>
	                    <label>Harga</label>
	                    <input placeholder='10000' onChange={(e) => setHarga(e.target.value)} />
	                </Form.Field>
	                <Button onClick={postData} type='submit'>Submit</Button>
	            </Form>
	        </div>
		</div>
    )
}