import { Link } from "react-router-dom"

export const Home = () => {
	return (
		<div>
			<h1>HOME</h1>
			<Link to="/contact">
				<button>IR A CONTACTO</button>
			</Link>
		</div>
	)
}
