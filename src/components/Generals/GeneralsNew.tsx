// @ts-nocheck
import React, { useState, useEffect } from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsModal, DsModalContent, DsList, DsButton, DsListItem, DsModalAction, DsContainer, DsNotification, DsRow, DsCol, DsH2, DsBox, DsForm, DsH5, DsH6 } from '@ds-prd-repo-react/components';
import { General } from '../../shared/Table/Generals/Table.mockdata'
import { connect, useDispatch } from 'react-redux'
import * as GeneralsAction from '../../redux/Generals/Generals.actions'
import * as ImportsFirstAction from '../../redux/ImportsFirst/ImportsFirst.actions'
import { RootState, ThunkDispatch } from '../../redux'
import Return from '../../shared/Return';
import GeneralForm from './GeneralForm';
import { useNavigate } from 'react-router-dom'
import './General.css';

declare interface GeneralsCRUDProps {
  generals: General[]
}

const GeneralsNew: React.FC<GeneralsCRUDProps> = (props) => {
  const dispatch: ThunkDispatch = useDispatch()

  const navigate = useNavigate()

  const [updatingGeneral, setUpdatingGeneral] = useState<General | undefined>(undefined)

  const [importsfirstFound, setImportsFirstFound] = useState<General | undefined>([])

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

      showSuccess()

      setTimeout(() => {
        navigate("/")    
        window.location.reload();    
      }, 1000)
    })
      .catch(showErrorAlert)
  }

  const handleGeneralImport = async (newGeneral: General) => {
    console.log(newGeneral);

    dispatch(ImportsFirstAction.getImportsFirstByPartNumber(newGeneral.partNumber))
      .then((response) => {
        console.log(response);
        setImportsFirstFound(response)
        openModal();
      })
      .catch(showImportNotFound)
  }

  const selectImportFirstToEdit = (importFirst) => {
    setUpdatingGeneral({
      id: importFirst.id,
      ecode: importFirst.ecode,
      partNumber: importFirst.partNumber,
      gseName: importFirst.nomenclature,
      unNumberCode: importFirst.unNumberCode,
      unNumberDescription: importFirst.unNumberDescription,
      ghsClassCode: importFirst.ghsClassCode,
      ghsClassDescription: importFirst.ghsDescription,
      storageConditionCode: importFirst.storageConditionCode,
      storageConditionDescription: importFirst.storageConditionDescription,
      manufacturerCageCode: importFirst.manufacturerCageCode,
      manufacturerName: importFirst.manufacturerName,
      manufacturerMfir: importFirst.manufacturerMfir,

      stateGeneralEnum: 'DRAFT',
      basicTechnologyEnum: '',
      gseRespCompanyId: 14,
      usageEnum: 'OPERATION_MAINTENANCE',
      manufacturerComName: '',
      measurementsLength: 0.00,
      measurementsHeight: 0.00,
      measurementsWidth: 0.00,
      measurementsDiameter: 0.00,
      measurementsWeight: 0.00,
      voltage: 0.00,
      cmmPartNumber: 'cmmPartNumber teste 100',
      typeEnum: 'SPECIAL',      
      technicalSpecification: 'technicalSpecification teste 300',
      briefOperationDescription: 'briefOperationDescription teste 400',
      revision: 0,
      cmm: 'true',
      ceMark: 'true',
      calibrationRequired: 'true',
      repairable: 'true',
      frequencyUnit: '1',
      maintenanceInformation: 'maintenanceInformation Teste 500',
      interchangeabilityClassEnum: 'ONE_WAY_INTERCHANGEABLE',
      serviceBulletinNumber: 'Teste 1',
      replacementObservation: 'Teste 2' ,
      frequency: 60,
      gseAtaSystemId: 39,
      replacementPartNumberId: 1,
      gseEqPartNumberId: 1,
      owner: 100,
      updatedby: 100,
      voltageUnitEnum: 'VAC',

    });

    closeModal();
  }

  interface ModalElement extends Element {
    open: () => void;
    close: () => void;
  }

  function openModal(): void {
    const modal = document.querySelector('[id=modal01]') as ModalElement | null;
    if (modal) {
      modal.open();
    }
  }

  function closeModal(): void {
    const modal = document.querySelector('[id=modal01]') as ModalElement | null;
    if (modal) {
      modal.close();
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

  const showImportNotFound = () => {
    let notification = document.querySelector('#notification')
    notification.options = {
      title: 'Part Number not valid!',
      description: "Enter a valid Part Number!",
      type: 'warning',
    }
  }

  function showSuccess() {
    let notification = document.querySelector('#notification');
    if (notification) {
      (notification as any).options = {
        title: 'Success',
        description: 'General success!!!',
        type: 'success',
      };
    }
  }

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return <>
    <div style={{ 'marginLeft': '50px', 'marginRigth': '30px', 'backgroundColor': '#f2f2f3' }}>
     
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
                <DsCol col="8">
                  <DsH5 color="strongest">Owner</DsH5>
                  <DsH5 color="strongest">André Luiz Moutinho</DsH5>
                </DsCol>
              </DsRow>
            </DsForm>
          </DsBox>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "tab1" && "active"}`}
              onClick={() => handleTabChange("tab1")}
            >
              <DsH6>General Data</DsH6>
            </div>
            <div
              className={`tab ${activeTab === "tab2" && "active"}`}
              onClick={() => handleTabChange("tab2")}
            >
              <DsH6 color="strong">Program Aplications</DsH6>
            </div>
            <div
              className={`tab ${activeTab === "tab3" && "active"}`}
              onClick={() => handleTabChange("tab3")}
            >
              <DsH6 color="strong">Revisions</DsH6>
            </div>
          </div>

          <div className="tab-content">
            {activeTab === "tab1" && <>

              <GeneralForm
                form={updatingGeneral}
                onSubmit={handleGeneralSubmit}
                onImport={handleGeneralImport}
              />

            </>}
            {activeTab === "tab2" && <><br /><br /><br /> Conteúdo de Program Aplications</>}
            {activeTab === "tab3" && <><br /><br /><br /> Conteúdo de Revisions</>}
          </div>
        </div>
      </DsContainer>

      <DsModal id="modal01" type="info" modal-title="Títudo do modal" size="larger">
        <DsModalContent>
          <DsList>
            <DsListItem size="small">
              <DsRow align-vertical="center">
                <DsCol col="4">
                  <DsH5 color="strong">Nomenclature</DsH5>
                </DsCol>
                <DsCol col="2">
                  <DsH5 color="strong">PartNumber</DsH5>
                </DsCol>    
                <DsCol col="1">
                  <DsH5 color="strong">Ecode</DsH5>
                </DsCol>         
                <DsCol col="1">
                  <DsH5 color="strong">MFIR</DsH5>
                </DsCol>           
                <DsCol col="3">
                  <DsH5 color="strong">Manufacturer</DsH5>
                </DsCol>         
                <DsCol col="1">
                  <DsH5 color="strong">Action</DsH5>
                </DsCol>
              </DsRow>
            </DsListItem>
            {Array.from(importsfirstFound).map((importFirst) => {
              return (
                <DsListItem key={importFirst.id}>
                  <DsRow key={importFirst.id}>
                    <DsCol col="4">
                      {importFirst.nomenclature}
                    </DsCol>
                    <DsCol col="2">
                      {importFirst.partNumber}
                    </DsCol>
                    <DsCol col="1">
                      {importFirst.ecode}
                    </DsCol>
                    <DsCol col="1">
                      {importFirst.manufacturerMfir}
                    </DsCol>
                    <DsCol col="3">
                      {importFirst.manufacturerName}
                    </DsCol>
                    <DsCol col="1">
                      <DsButton type="button" color="primary" label="Selecionar" onClick={() => selectImportFirstToEdit(importFirst)}></DsButton>
                    </DsCol>
                  </DsRow>
                </DsListItem>
              )
            })}
          </DsList>
        </DsModalContent>
        <DsModalAction>
          <DsButton label="Cancelar" variation="secondary" onClick={closeModal}></DsButton>
        </DsModalAction>
      </DsModal>

    </div>
  </>
}

const mapStateToProps = (state: RootState) => ({
  generals: state.generals
})

export default connect(mapStateToProps)(GeneralsNew)