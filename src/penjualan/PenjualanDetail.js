import React, { useEffect,useState } from 'react';
import { Button, Table,Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import axios from 'axios'

// const PenjualanHome = () => (
// 	<div className="main">
// 		<h2 className="main-header">Penjualan Home</h2>
// 	</div>
// )

// export default PenjualanHome;

export default function PenjualanDetail () {

    const [id, setIDNota] = useState(null);
    const [APIData, setAPIData] = useState([]);

    const [tanggal, setTanggal] = useState('');
    const [kodePelanggan, setKodePelanggan] = useState('');
    const [subTotal, setSubTotal] = useState('');

    useEffect(() => {
        setIDNota(localStorage.getItem('id_nota'))
        getData(localStorage.getItem('id_nota'))
    }, []);

	const getData = (id) => {
		// axios.get(`https://62e78e7793938a545bd3fc60.mockapi.io/api/testing/v1/fakeData`)
        axios.get(`https://mini-project-laravel.herokuapp.com/penjualan/${id}`)
            .then((response) => {
                setAPIData(response.data);
                setTanggal(response.data.tanggal);
                setKodePelanggan(response.data.kode_pelanggan);
                setSubTotal(response.data.sub_total);
            })
	}

    return (
        <div className="main">

            <Header inverted as='h1'>Detail Penjualan for kode nota {id}</Header>
            <Header inverted as='h3'>Kode Pelanggan : {kodePelanggan}</Header>
            <Header inverted as='h3'>Sub total : {subTotal}</Header>
            <Header inverted as='h3'>Tanggal : {tanggal}</Header>

            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID Nota</Table.HeaderCell>
                        <Table.HeaderCell>Tanggal</Table.HeaderCell>
                        <Table.HeaderCell>Kode Pelanggan</Table.HeaderCell>
                        <Table.HeaderCell>Sub Total</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                </Table.Body>
            </Table>
        </div>
    )
}