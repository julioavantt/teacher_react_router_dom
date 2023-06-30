import { Routes, Route, Link, NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { ProductDetail } from "./views/ProductDetail"
import { Home } from "./views/Home"
import { Products } from "./views/Products"
import json from "./data/products.json"

const Error404 = () => <div>Error 404</div>

const categories = ["zapatos", "zapatillas"]

function App() {
	return (
		<>
			<Navbar bg="primary" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						{categories.map(category => (
							<NavLink className="nav-link" to={`/category/${category}`}>
								{category}
							</NavLink>
						))}
						<NavLink className="nav-link" to="contact">
							Contact
						</NavLink>
					</Nav>
				</Container>
			</Navbar>
			<Container className="mt-4">
				<Routes>
					<Route path="/" element={<Products />} />
					<Route
						path="/contact"
						element={
							<div>
								<h1>Contact</h1>
								<Link to="/">IR A HOME</Link>
							</div>
						}
					/>
					<Route path="/category/:categoryId" element={<Products />} />

					<Route path="/products/:id" element={<ProductDetail />} />

					<Route path="*" element={<Error404 />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
