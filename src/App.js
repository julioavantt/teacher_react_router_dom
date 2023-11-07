import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { Home } from "./views/Home"
import { ProductDetail } from "./views/ProductDetail"
import data from "./data/products.json"
import "./App.css"

const categories = data.map(item => item.category)

const uniqueCategories = new Set(categories)

const Contact = () => <div>contact</div>

function App() {
	return (
		<BrowserRouter>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<NavLink to="/">
							<span className="nav-link">Home</span>
						</NavLink>
						{[...uniqueCategories].map(category => (
							<NavLink key={category} to={`/category/${category}`}>
								<span className="nav-link">{category}</span>
							</NavLink>
						))}
						<NavLink to="/contact">
							<span className="nav-link">Contact</span>
						</NavLink>
					</Nav>
				</Container>
			</Navbar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/products/:id" element={<ProductDetail />} />
				<Route path="/category/:categoryId" element={<Home />} />
				<Route path="*" element={404} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
