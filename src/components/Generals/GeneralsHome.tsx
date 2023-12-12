// @ts-nocheck
import React, { useState, useEffect } from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsContainer, DsNotification, DsRow,  
  DsButton, DsInput, DsBox, DsForm, DsSelect, 
  DsLink, DsCol, DsH2} from '@ds-prd-repo-react/components';
import Table, { TableHeader } from '../../shared/Table/Generals'
import { General } from '../../shared/Table/Generals/Table.mockdata'
import Swal from 'sweetalert2'
import { connect, useDispatch } from 'react-redux'
import * as GeneralsAction from '../../redux/Generals/Generals.actions'
import { RootState, ThunkDispatch } from '../../redux'
import { useNavigate } from 'react-router-dom'

const headers: TableHeader[] = [
  { key: 'id', value: 'GSEO Number', right: false },
  { key: 'ecode', value: 'Ecode' },
  { key: 'gseName', value: 'GSE Name' },
  { key: 'stateGeneralEnum', value: 'State' },
  { key: 'typeEnum', value: 'type' },
  { key: 'usageEnum', value: 'GSE usage' },
]

declare interface GeneralsCRUDProps {
  generals: General[]
}

const GeneralsHome: React.FC<GeneralsCRUDProps> = (props) => {
  const dispatch: ThunkDispatch = useDispatch()

  const navigate = useNavigate()

  const [updatingGeneral, setUpdatingGeneral] = useState<General | undefined>(undefined)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    dispatch(GeneralsAction.getGenerals())
      .catch(showErrorAlert)
  }

  const handleGeneralDelete = (general: General) => {
    Swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#005aaf",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, delete General part Number: ${general.id}!`
      })
      .then(({ value }) => value && deleteGeneral(general.id))
  }

  const deleteGeneral = async (id: string) => {
    dispatch(GeneralsAction.deleteGeneral(id))
      .then(() => {
        let notification = document.querySelector('#notification')
        notification.options = {
          title: 'Item Detail deleted',
          description: `Item deleted!`,
          type: 'error',
        }
        window.location.reload();
      })
      .catch(showErrorAlert)
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

  const selectItems = [
    { name: 'Select', value: 121 }
  ]

  const handleNewGeneral = () => {
    navigate("/generals-new")
  }

  return <>
    <div style={{ 'marginLeft': '50px', 'marginRigth': '30px', 'backgroundColor': '#f2f2f3' }}>
      <DsContainer fit-sidebar="true" >
        <DsNotification id="notification"></DsNotification>
        <div style={{ 'marginTop': '30px', 'width': '90%' }}>
          <DsRow content="between" align-vertical="center" padding-bottom="micro" padding-top="micro">
            <DsCol col="6" align-self="center">
              <DsH2>
                GSE General Data
              </DsH2>
            </DsCol>
            <DsCol col="6" align-self="center" align-vertical="center">
              <DsRow align-vertical="center" padding-bottom="micro" padding-top="micro" padding-left="micro" padding-right="sm" content="end" >
                <DsButton kind="default" show-icon="true" icon="plus" label="New GSEO" onClick={handleNewGeneral} />
              </DsRow>
            </DsCol>
          </DsRow>
          <DsBox padding-bottom="micro" padding-top="micro">
            <DsForm
              target="_self"
              name="form01"
              novalidate
            >
              <DsRow margin-col-top="sm" margin-col-bottom="sm" >
                <DsCol col="3">
                  <DsRow padding-bottom="micro" padding-top="sm" padding-right="sm" content="start" >

                    <DsInput
                      title-text="Type here for search"
                      name="name"
                      type="text"
                    />

                  </DsRow>
                </DsCol>
                <DsCol col="3">
                  <DsRow padding-bottom="micro" padding-top="sm" padding-right="sm" content="start" >

                    <DsSelect
                      items={selectItems}
                      id="select-render"
                      is-multiple="false"
                      is-auto-complete="false"
                      disabled="false"
                      required="false"
                      title-text="Status"
                      legend-text=""
                      status="default"></DsSelect>

                  </DsRow>
                </DsCol>
                <DsCol col="6">
                  <DsRow padding-bottom="micro" padding-top="sm" padding-right="sm" content="start" >

                    <DsButton kind="default" show-icon="true" icon="search" label="Search" />

                  </DsRow>
                </DsCol>
              </DsRow>
              <DsCol col="12">
                <DsRow padding-bottom="micro" padding-top="micro" padding-right="sm" content="start" >
                  <DsLink to="/">
                    <DsButton
                      style={{ padding: "0px" }}
                      kind="ghost"
                      label="advanced"
                    /></DsLink>
                </DsRow>
              </DsCol>
            </DsForm>
          </DsBox>
        </div>

        <Table
          headers={headers}
          data={props.generals}
          enableActions
          onDelete={handleGeneralDelete}
          onDetail={handleGeneralDelete}
          onEdit={setUpdatingGeneral}
        />

      </DsContainer>
    </div>
  </>
}

const mapStateToProps = (state: RootState) => ({
  generals: state.generals
})

export default connect(mapStateToProps)(GeneralsHome)