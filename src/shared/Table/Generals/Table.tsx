import React from 'react'
import './Table.scss'
import organizeData from '../../../utils/Generals/organizeDataForTable'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsBox, DsH7, DsH8, DsButton, DsCol, DsList, DsListItem, DsRow, DsIcon } from '@ds-prd-repo-react/components';
import { useNavigate } from 'react-router-dom'

export interface TableHeader {
  key: string
  value: string
  right?: boolean
}
declare interface TableProps {
  headers: TableHeader[]
  data: any[]

  enableActions?: boolean

  onDetail?: (item: any) => void
  onEdit?: (item: any) => void
}

const Table: React.FC<TableProps> = (props) => {
  const [organizedData, indexedHeaders] = organizeData(props.data, props.headers)

  const navigate = useNavigate()

  const handleStateGeneral = () => {
    navigate("/generals-state")
  }

  return <>
  <div  style={{'marginTop': '10px' , 'width':'90%'}}>
  <DsBox>
      <DsList show-pagination="true" bordered="false" style={{ paddingRight: "20px" }}>
        <DsListItem size="small">
          <DsRow align-vertical="center">
            {
              props.headers.map(header =>
                <DsCol  style={{ display: "flex", justifyContent: "space-between", whiteSpace: "nowrap" }}
                  className={header.right ? 'right' : ''}
                  key={header.key}
                >
                  <DsH8 color="strongest">{header.value}</DsH8>
                </DsCol>
              )
            }
            {
              props.enableActions
              && <DsCol style={{ display: "flex", justifyContent: "space-between", whiteSpace: "nowrap" }}
                className="right">
                <DsRow align-vertical="center" content="center">
                  <DsH8 color="strongest">Action</DsH8>
                </DsRow>
              </DsCol>
            }
          </DsRow>
        </DsListItem>

    <div>
        <DsListItem size="small">
          {
            organizedData.map((row, i) => {
              return <DsRow align-vertical="center" 
              style={{ backgroundColor: i % 2 === 0 ? '#f4f4f4' : '' }}
                key={i}>
                {
                  Object
                    .keys(row)
                    .map((item, i) =>
                      item !== '$original'
                        ? <DsCol style={{ display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", height: "50px" }}
                          key={row.$original.id + i}
                          className={indexedHeaders[item].right ? 'right' : ''}
                        >
                          <DsH7 color="strong">{row[item]}</DsH7>
                        </DsCol>
                        : null
                    )
                }
                {
                  props.enableActions
                  && <DsCol style={{ display: "flex", justifyContent: "space-between", whiteSpace: "nowrap" }}
                    className="actions right">
                    <DsRow content="end">
                         {
                        props.onEdit &&
                        <DsButton 
                        kind="default"
                        icon="eye-outline" 
                        disabled="false" 
                        size="small" 
                        type="default"
                        variation="primary"
                        show-icon="true"
                        onClick={() => props.onEdit && props.onEdit(row.$original)}    
                        style={{ marginLeft: '8px' }}
                        />
                      }

                       {
                        props.onDetail && 
                        <DsButton 
                        icon="copy" 
                        disabled="false" 
                        size="small" 
                        type="default"
                        variation="secondary"
                        label=""
                        show-icon="true"
                        onClick={handleStateGeneral}
                        style={{ marginLeft: '8px' }}>
                      </DsButton>
                      }
                 </DsRow>
                  </DsCol>
                }
              </DsRow>
            })
          }
        </DsListItem>
        </div>
      </DsList>
    </DsBox>
    </div> 
  </>
}

export default Table
