import React, { useEffect,useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import axios from 'axios'

// const PenjualanHome = () => (
// 	<div className="main">
// 		<h2 className="main-header">Penjualan Home</h2>
// 	</div>
// )

// export default PenjualanHome;

export default function PenjualanHome () {

	const [APIData, setAPIData] = useState([]);

	const setData = (data) => {
        let { id_nota, tanggal, kode_pelanggan, sub_total } = data;
        localStorage.setItem('id_nota', id_nota);
        localStorage.setItem('tanggal', tanggal);
        localStorage.setItem('kode_pelanggan', kode_pelanggan);
        localStorage.setItem('sub_total', sub_total);
	}

    useEffect(() => {
        getData()
    }, [])

    const onDelete = (id) => {
    	axios.delete(`http://192.168.18.20:8080/user/${id}`)
    	.then(() => {
	        getData();
	    })
	}

	const getData = () => {
		// axios.get(`https://62e78e7793938a545bd3fc60.mockapi.io/api/testing/v1/fakeData`)
        axios.get(`https://mini-project-laravel.herokuapp.com/penjualan`)
            .then((response) => {
                setAPIData(response.data);
            })
	}

    return (
        <div className="main">
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID Nota</Table.HeaderCell>
                        <Table.HeaderCell>Tanggal</Table.HeaderCell>
                        <Table.HeaderCell>Kode Pelanggan</Table.HeaderCell>
                        <Table.HeaderCell>Sub Total</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id_nota}</Table.Cell>
                                <Table.Cell>{data.tanggal}</Table.Cell>
                                <Table.Cell>{data.kode_pelanggan}</Table.Cell>
                                <Table.Cell>{data.sub_total}</Table.Cell>
                                <Link to='penjualan/update'>
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