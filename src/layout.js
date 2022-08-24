import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'

export default function Layout() {
	const [activeMenuMain1, setactiveMenuMain1] = useState(false);
	const [activeMenuMain2, setactiveMenuMain2] = useState(false);
	const [activeMenuMain3, setactiveMenuMain3] = useState(false);

    const [activeMenu1, setActiveMenu1] = useState(false);
    const [activeMenu2, setActiveMenu2] = useState(false);
    const [activeMenu3, setActiveMenu3] = useState(false);
    const [activeMenu4, setActiveMenu4] = useState(false);

    return (
		<>
			<ul>
				<li className={activeMenuMain1 ? "activeMain" : ""}>
					<Link to="pelanggan/" onClick={(e) => setactiveMenuMain1(!activeMenuMain1)}>
						<h2 className="main-header">Pelanggan</h2>
					</Link>
				</li>
				<li className={activeMenuMain2 ? "activeMain" : ""}>
					<Link to="barang/" onClick={(e) => setactiveMenuMain2(!activeMenuMain2)}>
						<h2 className="main-header">Barang</h2>
					</Link>
				</li>
				<li className={activeMenuMain3 ? "activeMain" : ""}>
					<Link to="penjualan/" onClick={(e) => setactiveMenuMain3(!activeMenuMain3)	}>
						<h2 className="main-header">Penjualan</h2>
					</Link>
				</li>
			</ul>

			{activeMenuMain1 
				?
				<ul>
					<li className={activeMenu1 ? "active" : ""}>
						<Link to="pelanggan/create" onClick={(e) => setActiveMenu1(!activeMenu1)}>
							<h2 className="main-header">Add Pelanggan</h2>
						</Link>
					</li>
				</ul>
				: ""
			}

			{activeMenuMain2
				?
				<ul>
					<li className={activeMenu2 ? "active" : ""}>
						<Link to="barang/create" onClick={(e) => setActiveMenu2(!activeMenu2)}>
							<h2 className="main-header">Add Barang</h2>
						</Link>
					</li>
				</ul>
				: ""
			}

			

			{activeMenuMain3
				?
				<ul>
					<li className={activeMenu3 ? "active" : ""}>
						<Link to="penjualan/create" onClick={(e) => setActiveMenu3(!activeMenu3)}>
							<h2 className="main-header">Add Penjualan</h2>
						</Link>
					</li>
				</ul>
				: ""
			}
			<Outlet />
		</>
	)
}