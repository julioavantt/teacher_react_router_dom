import { Link, useParams } from "react-router-dom"

import products from "../data/products.json"

export const Products = () => {
	const { categoryId } = useParams()

	console.log(categoryId)

	return (
		<ul>
			{products.map(product => (
				<li key={product.id}>
					{product.name}
					<Link to={`/products/${product.id}`}>
						<button>Ver más</button>
					</Link>
				</li>
			))}
		</ul>
	)
}
