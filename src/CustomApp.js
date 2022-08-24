import './App.css';
import Create from './create';
import Read from './read';
import Update from './update';
import Home from './home';
import Layout from './layout';

import PelangganHome from './pelanggan/PelangganHome'
import BarangHome from './barang/BarangHome'
import PenjualanHome from './penjualan/PenjualanHome'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function CustomApp () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='pelanggan' element={<PelangganHome />} />
					<Route path='barang' element={<BarangHome />} />
					<Route path='penjualan' element={<PenjualanHome />} />

					<Route path="user/create" element={<Create />} />
					<Route path="user/read" element={<Read />} />
					<Route path="user/update" element={<Update />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default CustomApp;
