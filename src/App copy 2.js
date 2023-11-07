import { Routes, Route, Link, NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { ProductDetail } from "./views/ProductDetail"
import { Home } from "./views/Home"
import { Products } from "./views/Products"
import data from "./data/products.json"

const Error404 = () => <div>Error 404</div>

const categories = data.map(product => product.category)
const categoriesMenu = [...new Set(categories)]

function App() {
	return (
		<>
			<Navbar bg="primary" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						{categoriesMenu.map(category => (
							<NavLink
								key={category}
								className="nav-link"
								to={`/category/${category}`}
							>
								{category}
							</NavLink>
						))}
						<Nav.Link href="/contact">Contact</Nav.Link>
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
					<Route path="/category/:categoryId" element={<Home />} />

					<Route path="/products/:id" element={<ProductDetail />} />

					<Route path="*" element={<Error404 />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
