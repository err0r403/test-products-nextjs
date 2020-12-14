import { products } from '../../../data'

export default function productHandler({ query: { id } }, res) {

  // console.log('API QUERY: ', id)
  const filtered = [ products[id-1] ]
  // const filtered = products.filter((p) => p.id === id)
  // console.log('PRODUCTS: ', products)
  // console.log('FILTERED: ', filtered)
  // Product with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Product with id: ${id} not found.` })
  }
}