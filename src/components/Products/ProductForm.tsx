import React, { useState, useEffect } from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsBox, DsForm, DsButton, DsInput, DsRow, DsCol, DsH2 } from '@ds-prd-repo-react/components';
import { Product } from '../../shared/Table/Products/Table.mockdata'

declare interface InitialFormState {
  id?: string
  name: string
  price: string
  stock: string
}

export interface ProductCreator {
  name: string
  price: number
  stock: number
}

declare interface ProductFormProps {
  form?: Product
  onSubmit?: (product: ProductCreator) => void
  onUpdate?: (product: Product) => void
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
  const initialFormState: InitialFormState = props.form
    ? {
      id: props.form.id,
      name: props.form.name,
      price: String(props.form.price),
      stock: String(props.form.stock),
    }
    : {
      name: '',
      price: '',
      stock: ''
    }

  const [form, setForm] = useState(initialFormState)

  useEffect(() => {
    setForm(initialFormState)
  }, [props.form])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const updateProduct = (product: InitialFormState) => {
    const productDto = {
      id: String(product.id),
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    props.onUpdate &&
      props.onUpdate(productDto)
  }

  const createProduct = (product: InitialFormState) => {
    const productDto = {
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    props.onSubmit &&
      props.onSubmit(productDto)
  }

  const handleFormSubmit = () => {
    form.id
      ? updateProduct(form)
      : createProduct(form)

    setForm(initialFormState)
  }

  return <>
    <div style={{ 'marginTop': '10px', 'width': '90%' }}>
      <DsRow align-vertical="center" padding-bottom="micro" padding-top="micro">
        <DsCol col="12">
          <DsH2>
            GSE Product
          </DsH2>
        </DsCol>
      </DsRow>
      <DsBox padding-bottom="micro" padding-top="micro">
        <DsForm
          target="_self"
          name="form01"
          novalidate
        >
        <DsRow margin-top="sm" margin-col-bottom="sm" >
            <DsCol col="5">
              <DsRow padding-bottom="micro" padding-top="micro" padding-right="sm" content="end" >
                <DsInput
                  title-text="Name"
                  onchange={handleInputChange}
                  value={form.name}
                  name="name"
                  placeholder="..."
                  required
                />
              </DsRow>
            </DsCol>
            <DsCol col="2">
              <DsRow padding-bottom="micro" padding-top="micro" padding-right="sm" content="end" >
                <DsInput
                  title-text="Price"
                  onchange={handleInputChange}
                  value={form.price}
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.0"
                  required
                />
              </DsRow>
            </DsCol>
            <DsCol col="2">
              <DsRow padding-bottom="micro" padding-top="micro" padding-right="sm" content="end" >
                <DsInput
                  title-text="Stock"
                  onchange={handleInputChange}
                  value={form.stock}
                  name="stock"
                  type="number"
                  min="0"
                  placeholder="0.0"
                  required
                />
              </DsRow>
            </DsCol>
            <DsCol col="3">
              <DsRow padding-bottom="micro" padding-top="micro" padding-left="micro" padding-right="sm">
                <DsButton kind="default" show-icon="true" icon={form.id ? 'edit' : 'plus'} label={form.id ? 'Update' : 'Add'} onClick={handleFormSubmit} />
              </DsRow>
            </DsCol>
          </DsRow>
          <DsCol col="12">
            <DsRow padding-top="sm" />
          </DsCol>
        </DsForm>
      </DsBox>
    </div>
    <br />
  </>
}

export default ProductForm