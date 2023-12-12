import http from '../utils/http'
import { Product } from '../shared/Table/Products/Table.mockdata'
import { ProductCreator } from '../components/Products/ProductForm'

export const getAllProducts = () =>
  http
    .get<Product[]>('/products')
    .then(res => res.data)

export const getProductsByPartNumberService = (partNumber: string) =>
  http
    .get<Product[]>(`/products/findByPartNumber/${partNumber}`)
    .then(res => res.data)


export const createSingleProduct = (product: ProductCreator) =>
  http
    .post('/products', product)

export const updateSingleProduct = ({ id, name, price, stock }: Product) =>
  http
    .patch(`/products/${id}`, {
      ...(name && { name }),
      ...(price && { price }),
      ...(stock && { stock }),
    })

export const deleteSingleProduct = (id: string) =>
  http
    .delete(`/products/${id}`)