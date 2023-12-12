import React from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsButton }  from '@ds-prd-repo-react/components';

declare interface ButtonProps {
  content?: string
  onClick?: () => void
  appendIcon?: JSX.Element
  children: string
}

const ButtonDetail: React.FC<ButtonProps> = (props) => {
  return <DsButton   
    kind="square" 
    icon="eye-outline"  
    caption={ props.children || 'Nameless button' } 
    label={ props.children || 'Nameless button' } 
    onClick={props.onClick}
  />
}

export default ButtonDetail