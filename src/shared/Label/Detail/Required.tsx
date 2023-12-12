import React from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsH7 }  from '@ds-prd-repo-react/components';

declare interface ButtonProps {
  content?: string
  onClick?: () => void
  appendIcon?: JSX.Element
  children: string
}

const ButtonDetail: React.FC<ButtonProps> = (props) => {
  return <DsH7/>
}

export default ButtonDetail