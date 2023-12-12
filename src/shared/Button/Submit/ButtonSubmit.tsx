import React from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsButton }  from '@ds-prd-repo-react/components';

declare interface ButtonProps {
  content?: string
  onClick?: () => void
  appendIcon?: JSX.Element
  children: string
}

const ButtonSubmit: React.FC<ButtonProps> = (props) => {
  return <DsButton
    className="AppButton"
    onClick={props.onClick}
    label={ props.children || 'Nameless DsButton' }
    show-icon={ props.appendIcon }
  >
  </DsButton>
}

export default ButtonSubmit