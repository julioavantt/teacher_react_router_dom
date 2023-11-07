import { BrowserRouter, Routes, Route } from "react-router-dom"

import { NavBar } from "./components/NavBar"
import { Home } from "./views/Home"
import { Error404 } from "./views/Error404"
import { Contact } from "./views/Contact"
import { ProductDetail } from "./views/ProductDetail"
import data from "./data/products.json"
import "./App.css"

const categories = data.map(item => item.category)

const uniqueCategories = new Set(categories)

function App() {
	return (
		<BrowserRouter>
			<NavBar categories={uniqueCategories} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />

				<Route path="/products/:id" element={<ProductDetail />} />
				<Route path="/category/:categoryId" element={<Home />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
