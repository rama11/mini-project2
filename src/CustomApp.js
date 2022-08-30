import './App.css';
import Create from './create';
import Read from './read';
import Update from './update';
import Home from './home';
import Layout from './layout';

import PelangganHome from './pelanggan/PelangganHome'
import PelangganCreate from './pelanggan/PelangganCreate';
import PelangganUpdate from './pelanggan/PelangganUpdate';
import BarangHome from './barang/BarangHome'
import BarangCreate from './barang/BarangCreate';
import BarangUpdate from './barang/BarangUpdate';
import PenjualanHome from './penjualan/PenjualanHome'
import PenjualanDetail from './penjualan/PenjualanDetail'

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

					<Route path="pelanggan/create" element={<PelangganCreate />} />
					<Route path="pelanggan/update" element={<PelangganUpdate />} />

					<Route path="barang/create" element={<BarangCreate />} />
					<Route path="barang/update" element={<BarangUpdate />} />
					
					<Route path="penjualan/detail" element={<PenjualanDetail />} />
					
					<Route path="user/create" element={<Create />} />
					<Route path="user/read" element={<Read />} />
					<Route path="user/update" element={<Update />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default CustomApp;
