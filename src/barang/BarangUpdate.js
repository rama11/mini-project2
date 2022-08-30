import React, { useEffect,useState } from 'react';
import { Button,Form } from 'semantic-ui-react'
import axios from 'axios'

export default function BarangUpdate () {

    const [nama, setNama] = useState('');
    const [kategori, setKategori] = useState('');
    const [harga, setHarga] = useState('');

    const [kode, setKode] = useState(null);

    useEffect(() => {
            setKode(localStorage.getItem('kode'))
            setNama(localStorage.getItem('nama'));
            setKategori(localStorage.getItem('kategori'));
            setHarga(localStorage.getItem('harga'))
    }, []);

    const updateAPIData = () => {
        axios.put(`https://mini-project-laravel.herokuapp.com/barang/${kode}`, {
            nama,
            kategori,
            harga
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
                    <label>Kategori</label>
                    <input value={kategori} onChange={(e) => setKategori(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Harga</label>
                    <input value={harga} onChange={(e) => setHarga(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}