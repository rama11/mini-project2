import React, { useEffect,useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import axios from 'axios'

// const PelangganHome = () => (
// 	<div className="main">
// 		<h2 className="main-header">Pelanggan Home</h2>
// 	</div>
// )

// export default PelangganHome;

export default function PelangganHome () {

	const [APIData, setAPIData] = useState([]);

	const setData = (data) => {
        let { id_pelanggan, nama, domisili, jenis_kelamin } = data;
        localStorage.setItem('ID Pelanggan', id_pelanggan);
        localStorage.setItem('Nama', nama);
        localStorage.setItem('Domisili', domisili);
        localStorage.setItem('Jenis Kelamin', jenis_kelamin);
	}

    useEffect(() => {
        getData()
    }, [])

    const onDelete = (id) => {
    	axios.delete(`https://mini-project-laravel.herokuapp.com/pelanggan/${id}`)
    	.then(() => {
	        getData();
	    })
	}

	const getData = () => {
		// axios.get(`https://62e78e7793938a545bd3fc60.mockapi.io/api/testing/v1/fakeData`)
        axios.get(`https://mini-project-laravel.herokuapp.com/pelanggan`)
            .then((response) => {
                setAPIData(response.data);
            })
	}

    return (
        <div className="main">
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID Pelanggan</Table.HeaderCell>
                        <Table.HeaderCell>Nama</Table.HeaderCell>
                        <Table.HeaderCell>Domisili</Table.HeaderCell>
                        <Table.HeaderCell>Jenis Kelamin</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id_pelanggan}</Table.Cell>
                                <Table.Cell>{data.nama}</Table.Cell>
                                <Table.Cell>{data.domisili}</Table.Cell>
                                <Table.Cell>{data.jenis_kelamin}</Table.Cell>
                                <Link to='pelanggan/update'>
	                                <Table.Cell>
	                                    <Button onClick={() => setData(data)}>Update</Button>
	                                </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}