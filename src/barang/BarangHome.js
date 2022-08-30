import React, { useEffect,useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import axios from 'axios'

// const BarangHome = () => (
// 	<div className="main">
// 		<h2 className="main-header">Barang Home</h2>
// 	</div>
// )

// export default BarangHome;

export default function BarangHome () {

	const [APIData, setAPIData] = useState([]);

	const setData = (data) => {
        let { kode, nama, kategori, harga } = data;
        localStorage.setItem('kode', kode);
        localStorage.setItem('nama', nama);
        localStorage.setItem('kategori', kategori);
        localStorage.setItem('harga', harga);
	}

    useEffect(() => {
        getData()
    }, [])

    const onDelete = (id) => {
    	axios.delete(`https://mini-project-laravel.herokuapp.com/barang/${id}`)
    	.then(() => {
	        getData();
	    })
	}

	const getData = () => {
		// axios.get(`https://62e78e7793938a545bd3fc60.mockapi.io/api/testing/v1/fakeData`)
        axios.get(`https://mini-project-laravel.herokuapp.com/barang`)
            .then((response) => {
                setAPIData(response.data);
            })
	}

    return (
        <div className="main">
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Kode</Table.HeaderCell>
                        <Table.HeaderCell>Nama Barang</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell>Harga</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.kode}</Table.Cell>
                                <Table.Cell>{data.nama}</Table.Cell>
                                <Table.Cell>{data.kategori}</Table.Cell>
                                <Table.Cell>{data.harga}</Table.Cell>
                                <Link to='update'>
	                                <Table.Cell>
	                                    <Button onClick={() => setData(data)}>Update</Button>
	                                </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.kode)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}