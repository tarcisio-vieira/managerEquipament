export interface Product {
  id: string
  name: string
  price: number
  stock: number
  createdAt?: string
  updatedAt?: string
}

const Products: Product[] = [
  {
    id: '1',
    name: 'Embraer EMB 314 Super Tucano',
    price: 1000000.10,
    stock: 2
  },
  {
    id: '2',
    name: 'Embraer KC-390',
    price: 2000000.20,
    stock: 5
  },
  {
    id: '3',
    name: 'Embraer E-Jet Series - E170',
    price: 300000.30,
    stock: 5
  },
  {
    id: '4',
    name: 'Embraer E2 Series - E195-E2',
    price: 400000.40,
    stock: 5
  }
]

export default Products
