// @ts-nocheck
import React, { useState, useEffect } from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsContainer, DsNotification, DsList, DsListItem, DsRow, DsCol, DsH5, DsButton } from '@ds-prd-repo-react/components';
import { ImportFirst } from '../../shared/Table/ImportsFirst/Table.mockdata'
import ImportFirstForm, { ImportFirstCreator } from './ImportFirstForm'
import Swal from 'sweetalert2'
import { connect, useDispatch } from 'react-redux'
import * as ImportsFirstAction from '../../redux/ImportsFirst/ImportsFirst.actions'
import { RootState, ThunkDispatch } from '../../redux'
import LinkReturn from '../../shared/Return/LinkReturn';
import Table, { TableHeader } from '../../shared/Table/ImportsFirst/Table'

const headers: TableHeader[] = [
  { key: 'id', value: 'id' },
  { key: 'partNumber', value: 'partNumber' },
  { key: 'ecode', value: 'ecode' },
]

declare interface ImportsFirstCRUDProps {
  importsfirst: ImportFirst[]
}

const ImportsFirstCRUD: React.FC<ImportsFirstCRUDProps> = (props) => {
  const dispatch: ThunkDispatch = useDispatch()

  const [updatingImportFirst, setUpdatingImportFirst] = useState<ImportFirst | undefined>(undefined)

  const [importsFirst, setImportsFist] = useState<ImportFirst | undefined>([])

  const handleImportsFirst = async (importFirst: ImportFirst) => {
    dispatch(ImportsFirstAction.getImportsFirst())
      .then((response) => {
        console.log(response);
        setImportsFist(response)
      })
      .catch(err)
  }

  //handleImportsFirst();

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    dispatch(ImportsFirstAction.getImportsFirst())
      .catch(showErrorAlert)
  }

  const handleImportsFirstubmit = async (importfirst: ImportFirstCreator) => {
    dispatch(ImportsFirstAction.insertNewImportFirst(importfirst))
      .then(() => {
        let notification = document.querySelector('#notification')
        notification.options = {
          title: 'Insert ImportFirst',
          description: `ImportFirst: ${importfirst.name}`,
          type: 'success',
        }
      })
      .catch(showErrorAlert)
  }

  const handleImportFirstUpdate = async (newImportFirst: ImportFirst) => {
    dispatch(ImportsFirstAction.updateImportFirst(newImportFirst))
      .then(() => {
        setUpdatingImportFirst(undefined)
        let notification = document.querySelector('#notification')
        notification.options = {
          title: 'Edit',
          description: `ImportFirst: ${newImportFirst.name}`,
          type: 'info',
        }
      })
      .catch(showErrorAlert)
  }

  const handleImportFirstDelete = (importfirst: ImportFirst) => {
    Swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#005aaf",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, delete importfirst: ${importfirst.name}!`
      })
      .then(({ value }) => value && deleteImportFirst(importfirst.id))
  }

  const deleteImportFirst = async (id: string) => {
    dispatch(ImportsFirstAction.deleteImportFirst(id))
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

  const handleImportFirstDetail = (importfirst: ImportFirst) => {
    let notification = document.querySelector('#notification')
    notification.options = {
      title: 'Item Detail',
      description: `${importfirst.name} - ${importfirst.stock} available in stock.`,
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
      <ImportFirstForm
        form={updatingImportFirst}
        onSubmit={handleImportsFirstubmit}
        onUpdate={handleImportFirstUpdate}
      />


          <DsList>
            <DsListItem size="small">
              <DsRow align-vertical="center">
                <DsCol>
                  <DsH5 color="strong">Id</DsH5>
                </DsCol>
                <DsCol>
                  <DsH5 color="strong">Name</DsH5>
                </DsCol>
                <DsCol>
                  <DsH5 color="strong">PartNumber</DsH5>
                </DsCol>
                <DsCol>

                </DsCol>
              </DsRow>
            </DsListItem>
            {Array.from(importsFirst).map((importFirst) => {
              return (
                <DsListItem>
                  <DsRow key={importFirst.id}>
                    <DsCol>
                      {importFirst.id}
                    </DsCol>
                    <DsCol>
                      {importFirst.partNumber}
                    </DsCol>
                    <DsCol>
                      {importFirst.ecode}
                    </DsCol>
                  </DsRow>
                </DsListItem>
              )
            })}
          </DsList>


    </DsContainer>
  </div>
  </>
}

const mapStateToProps = (state: RootState) => ({
  importsfirst: state.importsfirst
})

export default connect(mapStateToProps)(ImportsFirstCRUD)