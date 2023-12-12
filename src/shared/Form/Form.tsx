import React from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsForm } from '@ds-prd-repo-react/components';

declare interface FormProps {
  title?: string
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  children: JSX.Element | JSX.Element[]
}

const Form: React.FC<FormProps> = (props) => {
  const preventedSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onSubmit && props.onSubmit(event)
  }

  return <DsForm 
    onSubmit={preventedSubmit}
  >
    {
      props.title && <div className="Title">
        { props.title }
      </div>
    }
    { props.children }
  </DsForm>
}

export default Form
