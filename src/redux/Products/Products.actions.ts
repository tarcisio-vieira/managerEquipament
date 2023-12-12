import { Thunk } from ".."
import { ProductCreator } from "../../components/Products/ProductForm"
import {
  getAllProducts,
  updateSingleProduct,
  createSingleProduct,
  deleteSingleProduct,
  getProductsByPartNumberService
} from "../../services/Products.service"
import { Product } from "../../shared/Table/Products/Table.mockdata"

export const updateProduct =
  (newProduct: Product): Thunk =>
  async (dispatch) => {
    await updateSingleProduct(newProduct)
    dispatch(getProducts())
  }

export const getProducts =
  (): Thunk<Product[]> =>
  async (dispatch) => {
    const products = await getAllProducts()
    console.log('fetched')
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: products
    })    
  }

export const getProductsByPartNumber =
  (partNumber: string): Thunk<Product[]> =>
  async (dispatch) => {
    const products = await getProductsByPartNumberService(partNumber)
    console.log('fetched')
    dispatch({
      type: 'FETCH_PRODUCTS_BY_PART_NUMBER',
      payload: products
    })
    return products
  }

export const insertNewProduct =
  (product: ProductCreator): Thunk =>
  async (dispatch) => {
    await createSingleProduct(product)
    dispatch(getProducts())
  }

export const deleteProduct =
  (productId: string): Thunk =>
  async (dispatch) => {
    await deleteSingleProduct(productId)
    dispatch(getProducts())
  }