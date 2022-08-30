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
    const [detailPenjualan, setDetailPenjualan] = useState([]);

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
                setDetailPenjualan(response.data.detail);
                setTanggal(response.data.tanggal);
                setKodePelanggan(response.data.kode_pelanggan);
                setSubTotal(response.data.sub_total);
                console.log(response.data.detail)
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
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell>Nama Barang</Table.HeaderCell>
                        <Table.HeaderCell>Harga</Table.HeaderCell>
                        <Table.HeaderCell>Total Harga</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {detailPenjualan.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.kategori}</Table.Cell>
                                <Table.Cell>{data.nama}</Table.Cell>
                                <Table.Cell>{data.qty}</Table.Cell>
                                <Table.Cell>{data.total_harga}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
