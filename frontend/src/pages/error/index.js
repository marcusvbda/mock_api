import React from 'react'
import { H1 } from "../../styles"
import { ErrorContainer } from "./styles"
import { Link } from "react-router-dom"

export default function Error() {
	return (
		<>
			<ErrorContainer>
				<H1>404</H1>
				<p>Página não existe</p>
				<Link to="/">Go Back</Link>
			</ErrorContainer>
		</>
	)
}
