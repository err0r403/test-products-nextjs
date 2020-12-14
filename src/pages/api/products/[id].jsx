import { products } from '../../../data'

export default function productHandler({ query: { id }, method }, res) {

  const filtered = [products[id - 1]]

  switch (method) {
    case 'GET':
      // Get data from your database
      const filtered = [products[id - 1]]
      if (filtered.length < 1) res.status(404).json({ message: `Product with id: ${id} not found.` })
      res.status(200).json(filtered[0])
      break
    case 'PUT':
      // Update or create data in your database
      // res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}