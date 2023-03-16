import type { NextPage } from 'next'
import Head from 'next/head'
import s from 'styles/Home.module.scss'
import products from 'utils/mocks/products.json'

const Home: NextPage = () => {
	return (
		<>
			<div>
				{products.map(product => (
					<img key={product.id} src={product.image} />
				))}
			</div>
		</>
	)
}

export default Home
