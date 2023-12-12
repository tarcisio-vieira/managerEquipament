// @ts-nocheck
import React, { useState, useEffect } from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsContainer, DsNotification } from '@ds-prd-repo-react/components';
import Table, { TableHeader } from '../../shared/Table/Products'
import { Product } from '../../shared/Table/Products/Table.mockdata'
import ProductForm, { ProductCreator } from './ProductForm'
import Swal from 'sweetalert2'
import { connect, useDispatch } from 'react-redux'
import * as ProductsAction from '../../redux/Products/Products.actions'
import { RootState, ThunkDispatch } from '../../redux'
import LinkReturn from '../../shared/Return/LinkReturn';

const headers: TableHeader[] = [
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Stock', right: true }
]

declare interface ProductsCRUDProps {
  products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {
  const dispatch: ThunkDispatch = useDispatch()

  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    dispatch(ProductsAction.getProducts())
      .catch(showErrorAlert)
  }

  const handleProductSubmit = async (product: ProductCreator) => {
    dispatch(ProductsAction.insertNewProduct(product))
      .then(() => {
        let notification = document.querySelector('#notification')
        notification.options = {
          title: 'Insert Product',
          description: `Product: ${product.name}`,
          type: 'success',
        }
      })
      .catch(showErrorAlert)
  }

  const handleProductUpdate = async (newProduct: Product) => {
    dispatch(ProductsAction.updateProduct(newProduct))
      .then(() => {
        setUpdatingProduct(undefined)
        let notification = document.querySelector('#notification')
        notification.options = {
          title: 'Edit',
          description: `Product: ${newProduct.name}`,
          type: 'info',
        }
      })
      .catch(showErrorAlert)
  }

  const handleProductDelete = (product: Product) => {
    Swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#005aaf",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, delete product: ${product.name}!`
      })
      .then(({ value }) => value && deleteProduct(product.id))
  }

  const deleteProduct = async (id: string) => {
    dispatch(ProductsAction.deleteProduct(id))
      .then(() => {
        let notification = document.querySelector('#notification')
        notification.options = {
          title: 'Item Detail deleted',
          description: `Item deleted!`,
          type: 'error',
        }
      })
      .catch(showErrorAlert)
  }

  const handleProductDetail = (product: Product) => {
    let notification = document.querySelector('#notification')
    notification.options = {
      title: 'Item Detail',
      description: `${product.name} - ${product.stock} available in stock.`,
      type: 'info',
    }
  }

  const showErrorAlert =
    (err: Error) => {
      let notification = document.querySelector('#notification')
      notification.options = {
        title: 'Error',
        description: `Error in process`,
        type: 'error',
      }
    }

  return <>
  <div style={{ 'marginLeft': '50px','marginRigth': '30px' }}>
    <DsContainer fit-sidebar="true" >
      <DsNotification id="notification"></DsNotification>
      <div> <LinkReturn/></div>
      <ProductForm
        form={updatingProduct}
        onSubmit={handleProductSubmit}
        onUpdate={handleProductUpdate}
      />
      <Table
        headers={headers}
        data={props.products}
        enableActions
        onDelete={handleProductDelete}
        onDetail={handleProductDetail}
        onEdit={setUpdatingProduct}
      />
    </DsContainer>
  </div>
  </>
}

const mapStateToProps = (state: RootState) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)