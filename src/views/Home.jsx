import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Container, Card, Button } from "react-bootstrap"

import data from "../data/products.json"

export const Home = () => {
	const [products, setProducts] = useState([])
	const { categoryId } = useParams()

	useEffect(() => {
		if (categoryId) {
			const productsFilteredByCategory = data.filter(
				product => product.category === categoryId
			)

			console.log({ data, productsFilteredByCategory })
			setProducts(productsFilteredByCategory)
		} else {
			setProducts(data)
		}
	}, [categoryId])

	return (
		<Container>
			<h1>HOME</h1>
			<Link to="/contact">
				<button>IR A CONTACTO</button>
			</Link>
			<Container className="d-flex flex-wrap">
				{products.map(product => (
					<Card key={product.id} style={{ flex: 1 }}>
						<Card.Img variant="top" src={product.img} height="200" />
						<Card.Body>
							<Card.Title>{product.name}</Card.Title>
							<Card.Text>{product.detail}</Card.Text>
							<Card.Text>{product.category}</Card.Text>
							<Link to={`/products/${product.id}`}>
								<Button variant="primary">Go somewhere</Button>
							</Link>
						</Card.Body>
					</Card>
				))}
			</Container>
		</Container>
	)
}
