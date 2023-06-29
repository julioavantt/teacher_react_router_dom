import { Routes, Route, Link, Navlink } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { ProductDetail } from "./views/ProductDetail"
import { Home } from "./views/Home"

import products from "./data/products.json"

const Products = () => (
	<ul>
		{products.map(product => (
			<li key={product.id}>{product.name}</li>
		))}
	</ul>
)

function App() {
	return (
		<>
			<Navbar bg="primary" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Container className="mt-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/contact"
						element={
							<div>
								<h1>Contact</h1>
								<Link to="/">IR A HOME</Link>
							</div>
						}
					/>
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route path="*" element={404} />
				</Routes>
			</Container>
		</>
	)
}

export default App
