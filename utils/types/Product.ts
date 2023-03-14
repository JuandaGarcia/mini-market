export type Product = {
	id: string
	name: string
	image: string
	description: string
	price: number
}

export interface ProductCart extends Product {
	quantity: number
}
