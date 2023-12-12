import React from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsContainer , DsRow, DsCol, DsH6 } from '@ds-prd-repo-react/components';
import LinkReturn from '../shared/Return/LinkReturn';

const NotFoundView = () => {
  return <>  
    <DsContainer fit-sidebar="true" style={{ 'marginLeft': '60px','marginRight': '60px'}}>
    
    <DsRow padding-bottom="sm" padding-top="xl"  padding-right="sm" content="end">
        <DsCol>
              <DsRow>
                  <DsCol col="3">
                    <DsRow content="end">
                      <LinkReturn />
                    </DsRow>
                  </DsCol>
                  <DsCol col="9">
                    <DsH6>Not found! 404</DsH6>
                  </DsCol>
              </DsRow>
        </DsCol>
    </DsRow>
      
</DsContainer>
  </>
}

export default NotFoundView