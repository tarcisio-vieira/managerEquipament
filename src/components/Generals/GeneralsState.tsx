// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsContainer, DsNotification, DsRow, DsCol, DsH2, DsButton, DsInput, DsBox, DsForm, DsSelect, DsLink, DsH5 } from '@ds-prd-repo-react/components';
import Table, { TableHeader } from '../../shared/Table/Generals'
import { General } from '../../shared/Table/Generals/Table.mockdata'
//import GeneralForm, { GeneralCreator } from './GeneralForm'
import Swal from 'sweetalert2'
import { connect, useDispatch } from 'react-redux'
import * as GeneralsAction from '../../redux/Generals/Generals.actions'
import { RootState, ThunkDispatch } from '../../redux'
import { useNavigate } from 'react-router-dom'
import Return from '../../shared/Return';


const headers: TableHeader[] = [
  { key: 'id', value: 'GSEO Number', right: false },
  { key: 'partNumber', value: 'Part Numer' },
  { key: 'gseName', value: 'GSE Name' },
  { key: 'stateGeneralEnum', value: 'State' },
  { key: 'serviceBulletinNumber', value: 'Program' },
  { key: 'replacementObservation', value: 'Program State' }
]

declare interface GeneralsCRUDProps {
  generals: General[]
}

const GeneralsState: React.FC<GeneralsCRUDProps> = (props) => {
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

  const handleGeneralSubmit = async (general: GeneralCreator) => {
    dispatch(GeneralsAction.insertNewGeneral(general))
      .then(() => {
        let notification = document.querySelector('#notification')
        notification.options = {
          title: 'Insert GSEO',
          description: `GSEO: ${general.gseName}`,
          type: 'success',
        }
      })
      .catch(showErrorAlert)
  }

  const handleGeneralUpdate = async (newGeneral: General) => {
    dispatch(GeneralsAction.updateGeneral(newGeneral))
      .then(() => {
        setUpdatingGeneral(undefined)
        let notification = document.querySelector('#notification')
        notification.options = {
          title: 'Edit',
          description: `General: ${newGeneral.gseName}`,
          type: 'info',
        }
      })
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

  const handleGeneralDetail = (general: General) => {
    let notification = document.querySelector('#notification')
    notification.options = {
      title: 'Item Detail',
      description: `Part Number : ${general.partNumber} - Ecode: ${general.ecode}`,
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

  return  <>
  <div style={{ 'marginLeft': '50px', 'marginRigth': '30px' }}>
    <DsContainer fit-sidebar="true" >
      <DsNotification id="notification"></DsNotification>
      <div style={{ 'marginTop': '5px', 'width': '90%' }}>
        <DsRow padding-bottom="micro">
          <DsCol col="12">
            <DsH2>
              <Return />
            </DsH2>
          </DsCol>
        </DsRow>
        <DsBox padding-bottom="sm" padding-top="sm">
          <DsForm
            target="_self"
            name="form01"
            novalidate
          >
            <DsRow margin-col-top="sm" margin-col-bottom="sm" >
              <DsCol col="2">
                <DsH5 color="strongest">GSEO Status</DsH5>
                <DsH5 color="danger">DRAFT</DsH5>
              </DsCol>
              <DsCol col="2">
                <DsH5 color="strongest">GSEO Revision</DsH5>
                <DsH5 color="danger">000</DsH5>
              </DsCol>
              <DsCol col="6">
                <DsH5 color="strongest">Owner</DsH5>
                <DsH5 color="strongest">André Luiz R. Moutinho</DsH5>
              </DsCol>
              <DsCol col="2">
                <DsH5 color="strongest">GSEO Number</DsH5>
                <DsH5 color="strongest">GSEO-9999999</DsH5>
              </DsCol>
            </DsRow>
          </DsForm>
        </DsBox>
      </div>
    </DsContainer>
  </div>
</>
}

const mapStateToProps = (state: RootState) => ({
  generals: state.generals
})

export default connect(mapStateToProps)(GeneralsState)