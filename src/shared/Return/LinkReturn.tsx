import React from 'react';
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsH7, DsIcon } from '@ds-prd-repo-react/components';
import { useNavigate } from 'react-router-dom';

const LinkReturn = () => {
  const navigate = useNavigate();

  const handleReturn = () => {    
    navigate('/');
  };

  return (
    <DsH7 onClick={handleReturn} color="medium" style={{ cursor: "pointer"}}>
      <DsIcon name="arrow-back-outline" size="micro" color="primary"></DsIcon> Return
    </DsH7>
  );
};

export default LinkReturn;
