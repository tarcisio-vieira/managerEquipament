import React, { useState, useEffect, useRef } from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsBox, DsForm, DsButton, DsInput, DsRow, DsCol, DsH5, DsH6, DsH7, DsNotification, DsAccordion, DsIcon } from '@ds-prd-repo-react/components';
import { General } from '../../shared/Table/Generals/Table.mockdata'
import {
  selectItemsBasicTechnology, selectItemsType, selectItemsInterchangeabilityClass, selectItemsVoltageUnitEnum,
  selectItemsYesNo, selectItensResponsibleCompany, selectItemsAtaSystem, selectItemsGeneral, selectItemsGseUsage
} from '../Select/Selects';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap'; 

declare interface InitialFormState {
  id?: string
  stateGeneralEnum: string
  basicTechnologyEnum: string
  partNumber: string
  ecode: string
  gseName: string
  gseRespCompanyId: string
  usageEnum: string
  manufacturerMfir: string
  manufacturerName: string
  manufacturerComName: string
  manufacturerCageCode: string
  measurementsLength: string
  measurementsHeight: string
  measurementsWidth: string
  measurementsDiameter: string
  measurementsWeight: string
  voltage: string
  cmmPartNumber: string
  typeEnum: string
  storageConditionCode: string
  storageConditionDescription: string
  unNumberCode: string
  unNumberDescription: string
  ghsClassCode: string
  ghsClassDescription: string
  technicalSpecification: string
  briefOperationDescription: string
  revision: number
  cmm: string
  ceMark: string
  calibrationRequired: string
  repairable: string
  frequencyUnit: string
  maintenanceInformation: string
  interchangeabilityClassEnum: string
  serviceBulletinNumber: string
  replacementObservation: string
  frequency: number
  gseAtaSystemId: number
  replacementPartNumberId: number
  gseEqPartNumberId: number
  owner: number
  updatedby: number
  voltageUnitEnum: string
}

export interface GeneralCreator {
  stateGeneralEnum: string
  basicTechnologyEnum: string
  partNumber: string
  ecode: string
  gseName: string
  gseRespCompanyId: number
  usageEnum: string
  manufacturerMfir: string
  manufacturerName: string
  manufacturerComName: string
  manufacturerCageCode: string
  measurementsLength: number
  measurementsHeight: number
  measurementsWidth: number
  measurementsDiameter: number
  measurementsWeight: number
  voltage: number
  cmmPartNumber: string
  typeEnum: string
  storageConditionCode: string
  storageConditionDescription: string
  unNumberCode: string
  unNumberDescription: string
  ghsClassCode: string
  ghsClassDescription: string
  technicalSpecification: string
  briefOperationDescription: string
  revision: number
  cmm: string
  ceMark: string
  calibrationRequired: string
  repairable: string
  frequencyUnit: string
  maintenanceInformation: string
  interchangeabilityClassEnum: string
  serviceBulletinNumber: string
  replacementObservation: string
  frequency: number
  gseAtaSystemId: number
  replacementPartNumberId: number
  gseEqPartNumberId: number
  owner: number
  updatedby: number
  voltageUnitEnum: string
}

declare interface GeneralFormProps {
  form?: General
  onSubmit?: (general: GeneralCreator) => void
  onImport?: (general: General) => void
}

const GeneralForm: React.FC<GeneralFormProps> = (props) => {
  const initialFormState: InitialFormState = props.form
    ? {
      id: props.form.id,
      stateGeneralEnum: props.form.stateGeneralEnum,
      basicTechnologyEnum: props.form.basicTechnologyEnum,
      partNumber: props.form.partNumber,
      ecode: props.form.ecode,
      gseName: props.form.gseName,
      gseRespCompanyId: String(props.form.gseRespCompanyId),
      usageEnum: props.form.usageEnum,
      manufacturerMfir: props.form.manufacturerMfir,
      manufacturerName: props.form.manufacturerName,
      manufacturerComName: props.form.manufacturerComName,
      manufacturerCageCode: props.form.manufacturerCageCode,
      measurementsLength: String(props.form.measurementsLength),
      measurementsHeight: String(props.form.measurementsHeight),
      measurementsWidth: String(props.form.measurementsWidth),
      measurementsDiameter: String(props.form.measurementsDiameter),
      measurementsWeight: String(props.form.measurementsWeight),
      voltage: String(props.form.voltage),
      cmmPartNumber: props.form.cmmPartNumber,
      typeEnum: props.form.typeEnum,
      storageConditionCode: props.form.storageConditionCode,
      storageConditionDescription: props.form.storageConditionDescription,
      unNumberCode: props.form.unNumberCode,
      unNumberDescription: props.form.unNumberDescription,
      ghsClassCode: props.form.ghsClassCode,
      ghsClassDescription: props.form.ghsClassDescription,
      technicalSpecification: props.form.technicalSpecification,
      briefOperationDescription: props.form.briefOperationDescription,
      revision: props.form.revision,
      cmm: props.form.cmm,
      ceMark: props.form.ceMark,
      calibrationRequired: props.form.calibrationRequired,
      repairable: props.form.repairable,
      frequencyUnit: props.form.frequencyUnit,
      maintenanceInformation: props.form.maintenanceInformation,
      interchangeabilityClassEnum: props.form.interchangeabilityClassEnum,
      serviceBulletinNumber: props.form.serviceBulletinNumber,
      replacementObservation: props.form.replacementObservation,
      frequency: props.form.frequency,
      gseAtaSystemId: props.form.gseAtaSystemId,
      replacementPartNumberId: props.form.replacementPartNumberId,
      gseEqPartNumberId: props.form.gseEqPartNumberId,
      owner: props.form.owner,
      updatedby: props.form.updatedby,
      voltageUnitEnum: props.form.voltageUnitEnum,
    }
    : {
      stateGeneralEnum: '',
      basicTechnologyEnum: '',
      usageEnum: '',
      typeEnum: '',
      interchangeabilityClassEnum: '',
      gseRespCompanyId: '',
      partNumber: '',
      ecode: '',
      gseName: '',
      manufacturerMfir: '',
      manufacturerName: '',
      manufacturerComName: '',
      manufacturerCageCode: '',
      measurementsLength: '',
      measurementsHeight: '',
      measurementsWidth: '',
      measurementsDiameter: '',
      measurementsWeight: '',
      voltage: '',
      cmmPartNumber: '',
      storageConditionCode: '',
      storageConditionDescription: '',
      unNumberCode: '',
      unNumberDescription: '',
      ghsClassCode: '',
      ghsClassDescription: '',
      technicalSpecification: '',
      briefOperationDescription: '',
      revision: 0,
      frequencyUnit: 'Hz',
      maintenanceInformation: '',
      serviceBulletinNumber: '',
      replacementObservation: '',
      cmm: '',
      ceMark: '',
      calibrationRequired: '',
      repairable: '',
      frequency: 0,
      gseAtaSystemId: 0,
      replacementPartNumberId: 0,
      gseEqPartNumberId: 0,
      owner: 100,
      updatedby: 100,
      voltageUnitEnum: '',
    }

  const [form, setForm] = useState(initialFormState)
  useEffect(() => {
    setForm(initialFormState)
  }, [props.form])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const importGeneral = (general: InitialFormState) => {
    const generalDto = {
      id: String(general.id),
      stateGeneralEnum: String(general.stateGeneralEnum),
      basicTechnologyEnum: String(general.basicTechnologyEnum),
      partNumber: String(general.partNumber),
      ecode: String(general.ecode),
      gseName: String(general.gseName),
      gseRespCompanyId: Number(general.gseRespCompanyId),
      usageEnum: String(general.usageEnum),
      manufacturerMfir: String(general.manufacturerMfir),
      manufacturerName: String(general.manufacturerName),
      manufacturerComName: String(general.manufacturerComName),
      manufacturerCageCode: String(general.manufacturerCageCode),
      measurementsLength: Number(general.measurementsLength),
      measurementsHeight: Number(general.measurementsHeight),
      measurementsWidth: Number(general.measurementsWidth),
      measurementsDiameter: Number(general.measurementsDiameter),
      measurementsWeight: Number(general.measurementsWeight),
      voltage: Number(general.voltage),
      cmmPartNumber: String(general.cmmPartNumber),
      typeEnum: String(general.typeEnum),
      storageConditionCode: String(general.storageConditionCode),
      storageConditionDescription: String(general.storageConditionDescription),
      unNumberCode: String(general.unNumberCode),
      unNumberDescription: String(general.unNumberDescription),
      ghsClassCode: String(general.ghsClassCode),
      ghsClassDescription: String(general.ghsClassDescription),
      technicalSpecification: String(general.technicalSpecification),
      briefOperationDescription: String(general.briefOperationDescription),
      revision: Number(general.revision),
      cmm: String(general.cmm),
      ceMark: String(general.ceMark),
      calibrationRequired: String(general.calibrationRequired),
      repairable: String(general.repairable),
      frequencyUnit: String(general.frequencyUnit),
      maintenanceInformation: String(general.maintenanceInformation),
      interchangeabilityClassEnum: String(general.interchangeabilityClassEnum),
      serviceBulletinNumber: String(general.serviceBulletinNumber),
      replacementObservation: String(general.replacementObservation),
      frequency: Number(general.frequency),
      gseAtaSystemId: Number(general.gseAtaSystemId),
      replacementPartNumberId: Number(general.replacementPartNumberId),
      gseEqPartNumberId: Number(general.gseEqPartNumberId),
      owner: Number(general.owner),
      updatedby: Number(general.updatedby),
      voltageUnitEnum: String(general.voltageUnitEnum),
    }
    props.onImport &&
      props.onImport(generalDto)
  }

  const createGeneral = (general: InitialFormState) => {
    const generalDto = {
      stateGeneralEnum: String(general.stateGeneralEnum),
      basicTechnologyEnum: String(general.basicTechnologyEnum),
      partNumber: String(general.partNumber),
      ecode: String(general.ecode),
      gseName: String(general.gseName),
      gseRespCompanyId: Number(general.gseRespCompanyId),
      usageEnum: String(general.usageEnum),
      manufacturerMfir: String(general.manufacturerMfir),
      manufacturerName: String(general.manufacturerName),
      manufacturerComName: String(general.manufacturerComName),
      manufacturerCageCode: String(general.manufacturerCageCode),
      measurementsLength: Number(general.measurementsLength),
      measurementsHeight: Number(general.measurementsHeight),
      measurementsWidth: Number(general.measurementsWidth),
      measurementsDiameter: Number(general.measurementsDiameter),
      measurementsWeight: Number(general.measurementsWeight),
      voltage: Number(general.voltage),
      cmmPartNumber: String(general.cmmPartNumber),
      typeEnum: String(general.typeEnum),
      storageConditionCode: String(general.storageConditionCode),
      storageConditionDescription: String(general.storageConditionDescription),
      unNumberCode: String(general.unNumberCode),
      unNumberDescription: String(general.unNumberDescription),
      ghsClassCode: String(general.ghsClassCode),
      ghsClassDescription: String(general.ghsClassDescription),
      technicalSpecification: String(general.technicalSpecification),
      briefOperationDescription: String(general.briefOperationDescription),
      revision: Number(general.revision),
      cmm: String(general.cmm),
      ceMark: String(general.ceMark),
      calibrationRequired: String(general.calibrationRequired),
      repairable: String(general.repairable),
      frequencyUnit: String(general.frequencyUnit),
      maintenanceInformation: String(general.maintenanceInformation),
      interchangeabilityClassEnum: String(general.interchangeabilityClassEnum),
      serviceBulletinNumber: String(general.serviceBulletinNumber),
      replacementObservation: String(general.replacementObservation),
      frequency: Number(general.frequency),
      gseAtaSystemId: Number(general.gseAtaSystemId),
      replacementPartNumberId: Number(general.replacementPartNumberId),
      gseEqPartNumberId: Number(general.gseEqPartNumberId),
      owner: Number(general.owner),
      updatedby: Number(general.updatedby),
      voltageUnitEnum: String(general.voltageUnitEnum),
    }

    props.onSubmit &&
      props.onSubmit(generalDto)
  }

  const handleFormSubmitToImport = () => {
    importGeneral(form)
  }
  // const handleFormSubmitToUpdate = () => {
  //   updateGeneral(form)
  //   setForm(initialFormState)
  // }

  const handleFormSubmitDraft = () => {

    form.stateGeneralEnum="DRAFT"

    createGeneral(form)
    setForm(initialFormState)
  }
  
  const handleFormSubmitApproval = () => {

    form.stateGeneralEnum="PENDING_DRFT"    

    createGeneral(form)
    setForm(initialFormState)
  }

  const [sapRegisteredIsChecked, setSapRegisteredChecked] = useState(false);
  const handleCheckboxChangeSAP = () => {
    if (!sapRegisteredIsChecked) showInfo();
    setSapRegisteredChecked(!sapRegisteredIsChecked);
  };

  function showInfo() {
    let notification = document.querySelector('#notification');
    if (notification instanceof HTMLElement) {
      if (!('options' in notification)) {
        console.error('A propriedade "options" não existe no elemento.');
        return;
      }
      (notification as any).options = {
        title: 'SAP Registered',
        description: ' click button Import ',
        type: 'info',
      };
    }
  }

  return <>
  <div style={{ 'marginLeft': '-50px', 'width': '110%', 'backgroundColor': '#f2f2f3'}}>
      <DsNotification id="notification"></DsNotification>
      <DsRow padding-bottom="micro" padding-top="sm" padding-right="xl" content="end" style={{ 'marginBottom': '5px' }} >

        <DsRow>
          <DsButton type="default" variation="primary" kind="default" disabled="false" show-icon="true" label="Save Draft" onClick={handleFormSubmitDraft} />
        </DsRow>

        <DsRow>
          <DsButton type="default" variation="primary" kind="default" disabled="false" show-icon="true" icon="chevron-right-outline" label="Send to Approval" onClick={handleFormSubmitApproval} />
        </DsRow>

      </DsRow>
      <DsForm id="form01" title="General form"

        target="_self"
        name="form01"
        novalidate
      >
        <DsCol col="12">
          <DsRow>
            <DsCol col="12">
              <DsBox>
                <DsH6 color="strong">General</DsH6>
                <DsRow paddingAll='xs' padding-top="sm" >
                  <DsCol col="4">
                    <DsInput type="text" name="partNumber" required onchange={handleInputChange} value={form.partNumber} title-text="Part Number" label="Part Number" />
                  
                  </DsCol>
                  <DsCol col="4">
                    <DsRow content="end">
                      <DsInput type="checkbox" name="sapRegistered" status="enabled" disabled="false" onchange={handleCheckboxChangeSAP} label="SAP Registered" />
                    </DsRow>
                  </DsCol>
                  <DsCol col="2">
                    <DsRow align-vertical="center">
                      <DsButton
                        disabled={!sapRegisteredIsChecked}
                        kind="default"
                        show-icon="true"
                        label={'Import'}
                        onClick={handleFormSubmitToImport}
                      />
                    </DsRow>
                  </DsCol>
                </DsRow>
                <DsRow align-vertical="center" padding-bottom="sm">
                  <DsCol col="12">
                     <DsInput type="textarea" name="gseName" required rows="2" onchange={handleInputChange} value={form.gseName} title-text="GSE Name"/>
                  </DsCol>
                </DsRow>
                <DsRow align-vertical="center" padding-bottom="sm">
                  <DsCol col="4">     
                  <DsH7 size="small" color="strong">Responsible Company</DsH7>           
                    <Input
                      onChange={handleInputChange}
                      type="select"
                      title="gseRespCompanyId"
                      name="gseRespCompanyId"
                      id="gseRespCompanyId"
                      value={form.gseRespCompanyId}
                    >
                    <option value=""></option>
                    {selectItensResponsibleCompany.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                  </DsCol>
                  <DsCol col="4">  
                  <DsH7 size="small" color="strong">Usage</DsH7>         
                  <Input
                      onChange={handleInputChange}
                      type="select"
                      title="usageEnum"
                      name="usageEnum"
                      id="usageEnum"
                      value={form.usageEnum}
                    >
                    <option value=""></option>
                    {selectItemsGseUsage.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                  </DsCol>
                  <DsCol col="4"> 
                  <DsH7 size="small" color="strong">Ecode</DsH7>  
                    <DsInput type="text" name="ecode" disabled="true" onchange={handleInputChange} value={form.ecode}/>
                  </DsCol>
                </DsRow>
                <DsRow align-vertical="center" padding-bottom="sm">
                  <DsCol col="4"> 
                  <DsH7 size="small" color="strong">CMM</DsH7>       
                  <Input
                      onChange={handleInputChange}
                      type="select"
                      title="cmm"
                      name="cmm"
                      id="cmm"
                      value={form.cmm}
                    >
                    <option value=""></option>
                    {selectItemsYesNo.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Input>                    
                   </DsCol>
                  <DsCol col="8">
                  <DsH7 size="small" color="strong">CMM Part Number</DsH7>  
                    <DsInput type="textarea" name="cmmPartNumber" onchange={handleInputChange} value={form.cmmPartNumber} rows="1"/>
                  </DsCol>
                </DsRow>
                <DsRow align-vertical="center" padding-bottom="sm">
                  <DsCol col="4">   
                  <DsH7 size="small" color="strong">CE Mark</DsH7>                         
                  <Input
                      onChange={handleInputChange}
                      type="select"
                      title="ceMark"
                      name="ceMark"
                      id="ceMark"
                      value={form.ceMark}
                    >
                    <option value=""></option>
                    {selectItemsYesNo.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                  </DsCol>
                  <DsCol col="4">    
                  <DsH7 size="small" color="strong">Calibration Required</DsH7>    
                  <Input
                      onChange={handleInputChange}
                      type="select"
                      title="calibrationRequired"
                      name="calibrationRequired"
                      id="calibrationRequired"
                      value={form.calibrationRequired}
                    >
                    <option value=""></option>
                    {selectItemsYesNo.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                  </DsCol>
                  <DsCol col="4">     
                  <DsH7 size="small" color="strong">Repairable</DsH7>   
                  <Input
                      onChange={handleInputChange}
                      type="select"
                      title="repairable"
                      name="repairable"
                      id="repairable"
                      value={form.repairable}
                    >
                    <option value=""></option>
                    {selectItemsYesNo.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                  </DsCol>
                </DsRow>
                <DsRow align-vertical="center" padding-bottom="sm">
                  <DsCol col="4">     
                  <DsH7 size="small" color="strong">Ata Number</DsH7>   
                  <Input
                      onChange={handleInputChange}
                      type="select"
                      title="gseAtaSystemId"
                      name="gseAtaSystemId"
                      id="gseAtaSystemId"
                      value={form.gseAtaSystemId}
                    >
                    <option value=""></option>
                    {selectItemsAtaSystem.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                  </DsCol>
                  <DsCol col="4">     
                  <DsH7 size="small" color="strong">Type</DsH7>   
                  <Input
                      onChange={handleInputChange}
                      type="select"
                      title="typeEnum"
                      name="typeEnum"
                      id="typeEnum"
                      value={form.typeEnum}
                    >
                    <option value=""></option>
                    {selectItemsType.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                  </DsCol>
                  <DsCol col="4">     
                  <DsH7 size="small" color="strong">Basic Tecnology</DsH7>   
                  <Input
                      onChange={handleInputChange}
                      type="select"
                      title="basicTechnologyEnum"
                      name="basicTechnologyEnum"
                      id="basicTechnologyEnum"
                      value={form.basicTechnologyEnum}
                    >
                    <option value=""></option>
                    {selectItemsBasicTechnology.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                  </DsCol>
                </DsRow>
                <DsRow align-vertical="center" padding-bottom="sm">
                  <DsCol col="12" align-vertical="center" padding-bottom="sm">                    
                    <DsInput type="textarea" name="storageConditionDescription" title-text="Storage Condition" value={form.storageConditionCode + "    " + form.storageConditionDescription} rows="2" disabled="true" onchange={handleInputChange}/>
                  </DsCol>
                  <DsCol col="12" align-vertical="center" padding-bottom="sm">
                    <DsInput type="textarea" name="unNumberDescription" title-text="UN Number" value={form.unNumberCode + "     " + form.unNumberDescription} rows="2" disabled="true" onchange={handleInputChange}/>
                  </DsCol>
                  <DsCol col="12" align-vertical="center" padding-bottom="sm">
                    <DsInput type="textarea" name="ghsClassDescription" title-text="GHS Class" value={form.ghsClassCode + "   " + form.ghsClassDescription} rows="2" disabled="true" onchange={handleInputChange}/>
                  </DsCol>
                  <DsCol col="12" align-vertical="center" padding-bottom="sm">
                    <DsInput type="textarea" name="technicalSpecification" title-text="Technical Specification" value={form.technicalSpecification } rows="2" onchange={handleInputChange} maxLength={6000}/>
                  </DsCol>
                  <DsCol col="12" align-vertical="center" padding-bottom="sm">
                    <DsInput type="textarea" name="briefOperationDescription" title-text="Brief Operation Description" value={form.briefOperationDescription } rows="2" onchange={handleInputChange} maxLength={600}/>
                  </DsCol>
                  <DsCol col="12" align-vertical="center" padding-bottom="sm">
                    <DsInput type="textarea" name="maintenanceInformation" title-text="Maintenance Information" value={form.maintenanceInformation } rows="2" onchange={handleInputChange} maxLength={1000}/>
                  </DsCol>
                </DsRow>
                <DsRow align-vertical="center" padding-bottom="sm">
                  <DsCol col="4">
                  <DsH7 size="small" color="strong">Voltage</DsH7>
                    <DsInput type="number" name="voltage" onchange={handleInputChange} value={form.voltage}/>
                  </DsCol>
                  <DsCol col="4">                    
                  <DsH7 size="small" color="strong">Voltage Unit</DsH7> 
                  <Input
                      onChange={handleInputChange}
                      type="select"
                      title="voltageUnitEnum"
                      name="voltageUnitEnum"
                      id="voltageUnitEnum"
                      value={form.voltageUnitEnum}
                    >
                    <option value=""></option>
                    {selectItemsVoltageUnitEnum.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                  </DsCol>
                  <DsCol col="3">
                  <DsH7 size="small" color="strong">Frequency</DsH7>
                    <DsInput type="number" name="frequency" onchange={handleInputChange} value="0.0"/>
                  </DsCol>
                  <DsCol col="1">
                    <DsH5>Hz</DsH5>
                  </DsCol>
                </DsRow>
              </DsBox>
              <DsRow padding-top="sm" />
              <DsAccordion label="Manufacturer" ellipsis="false" padding-top="sm">
                <DsRow padding-left="micro" padding-right="micro" padding-top="micro">
                  <DsCol col="11">
                    <DsCol col="12">
                      <DsRow align-vertical="center" padding-bottom="sm">
                        <DsCol col="4">
                          <DsInput type="text" name="manufacturerMfir" onchange={handleInputChange} value={form.manufacturerMfir} title-text="MFIR" disabled="true"/>
                        </DsCol>
                        <DsCol col="8">
                          <DsInput type="text" name="manufacturerName" onchange={handleInputChange} value={form.manufacturerName} title-text="Name" disabled="true"/>
                        </DsCol>
                      </DsRow>
                      <DsRow align-vertical="center" padding-bottom="sm">
                        <DsCol col="4">
                          <DsInput type="text" name="manufacturerCageCode" onchange={handleInputChange} value={form.manufacturerCageCode} title-text="Cage Code" disabled="true"/>
                        </DsCol>
                        <DsCol col="4">
                          <DsInput type="text" name="manufacturerComName" onchange={handleInputChange} value={form.manufacturerComName} title-text="COM. Name"/>
                        </DsCol>
                      </DsRow>
                    </DsCol>
                  </DsCol>
                </DsRow>
              </DsAccordion>
              <DsRow padding-top="sm" />
              <DsAccordion
                label="Dimensions and Weight "
                ellipsis="false">
                <DsRow padding-left="micro" padding-right="micro" padding-top="micro">
                  <DsCol col="11">
                    <DsRow paddingAll='xs'>
                      <DsCol col="1">
                        <DsRow align-vertical="center">
                          <DsH6 color="">Length</DsH6>
                        </DsRow>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsInput
                            type="text"
                            value={form.measurementsLength}
                            name="measurementsLength"
                            onchange={handleInputChange}
                          />
                        </DsRow>
                      </DsCol>
                      <DsCol col="1">
                        <DsH6 color="">mm</DsH6>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsH6 color="">
                            <DsIcon name="arrow-back-outline" size="md" color="primary" />
                            <DsIcon name="arrow-forward-outline" size="md" color="primary" />
                          </DsH6>
                        </DsRow>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsInput
                            type="text"
                            value=" "
                            required="false"
                          />
                        </DsRow>
                      </DsCol>
                      <DsCol col="1">
                        <DsH6 color="">in.</DsH6>
                      </DsCol>
                    </DsRow>
                    <DsRow paddingAll='xs'>
                      <DsCol col="1">
                        <DsRow align-vertical="center">
                          <DsH6 color="">Height</DsH6>
                        </DsRow>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsInput
                            type="text"
                            value={form.measurementsHeight}
                            name="measurementsHeight"
                            onchange={handleInputChange}
                          />
                        </DsRow>
                      </DsCol>
                      <DsCol col="1">
                        <DsH6 color="">mm</DsH6>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsH6 color="">
                            <DsIcon name="arrow-back-outline" size="md" color="primary" />
                            <DsIcon name="arrow-forward-outline" size="md" color="primary" />
                          </DsH6>
                        </DsRow>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsInput
                            type="text"
                          />
                        </DsRow>
                      </DsCol>
                      <DsCol col="1">
                        <DsH6 color="">in.</DsH6>
                      </DsCol>
                    </DsRow>
                    <DsRow paddingAll='xs'>
                      <DsCol col="1">
                        <DsRow align-vertical="center">
                          <DsH6 color="">Width</DsH6>
                        </DsRow>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsInput
                            type="text"
                            value={form.measurementsWidth}
                            name="measurementsWidth"
                            onchange={handleInputChange}
                          />
                        </DsRow>
                      </DsCol>
                      <DsCol col="1">
                        <DsH6 color="">mm</DsH6>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsH6 color="">
                            <DsIcon name="arrow-back-outline" size="md" color="primary" />
                            <DsIcon name="arrow-forward-outline" size="md" color="primary" />
                          </DsH6>
                        </DsRow>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsInput
                            type="text"
                          />
                        </DsRow>
                      </DsCol>
                      <DsCol col="1">
                        <DsH6 color="">in.</DsH6>
                      </DsCol>
                    </DsRow>

                    <DsRow paddingAll='xs'>
                      <DsCol col="1">
                        <DsRow align-vertical="center">
                          <DsH6 color="">Diameter</DsH6>
                        </DsRow>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsInput
                            type="text"
                            value={form.measurementsDiameter}
                            name="measurementsDiameter"
                            onchange={handleInputChange}
                          />
                        </DsRow>
                      </DsCol>
                      <DsCol col="1">
                        <DsH6 color="">mm</DsH6>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsH6 color="">
                            <DsIcon name="arrow-back-outline" size="md" color="primary" />
                            <DsIcon name="arrow-forward-outline" size="md" color="primary" />
                          </DsH6>
                        </DsRow>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsInput
                            type="text"
                            value=" "
                            required="false"
                          />
                        </DsRow>
                      </DsCol>
                      <DsCol col="1">
                        <DsH6 color="">in.</DsH6>
                      </DsCol>
                    </DsRow>

                    <DsRow paddingAll='xs'>
                      <DsCol col="1">
                        <DsRow align-vertical="center">
                          <DsH6 color="">Weight</DsH6>
                        </DsRow>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsInput
                            type="text"
                            value={form.measurementsWeight}
                            name="measurementsWeight"
                            onchange={handleInputChange}
                          />
                        </DsRow>
                      </DsCol>
                      <DsCol col="1">
                        <DsH6 color="">kg</DsH6>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsH6 color="">
                            <DsIcon name="arrow-back-outline" size="md" color="primary" />
                            <DsIcon name="arrow-forward-outline" size="md" color="primary" />
                          </DsH6>
                        </DsRow>
                      </DsCol>
                      <DsCol col="2">
                        <DsRow align-vertical="center">
                          <DsInput
                            type="text"
                          />
                        </DsRow>
                      </DsCol>
                      <DsCol col="1">
                        <DsH6 color="">lbs.</DsH6>
                      </DsCol>
                    </DsRow>
                  </DsCol>
                </DsRow>
              </DsAccordion>
              <DsRow padding-top="sm" />

              <DsAccordion
                label="Equivalent Part Number"
                ellipsis="false">
                <DsRow padding-left="micro" padding-right="micro" padding-top="micro">
                  <DsCol>
                  </DsCol>
                </DsRow>
              </DsAccordion>

              <DsRow padding-top="sm" />

              <DsAccordion
                label="Part List"
                open="false"
                ellipsis="false">
                <DsRow padding-left="micro" padding-right="micro" padding-top="micro">
                  <DsCol>
                  </DsCol>
                </DsRow>
              </DsAccordion>

              <DsRow padding-top="sm" />

              <DsAccordion
                label="Attachments"
                ellipsis="false">
                <DsRow padding-left="micro" padding-right="micro" padding-top="micro">
                  <DsCol>
                  </DsCol>
                </DsRow>
              </DsAccordion>

              <DsRow padding-top="sm" />
              
              <DsAccordion
                label="Replacement Part Number"
                ellipsis="false">
                <DsRow padding-left="micro" padding-right="micro" padding-top="micro">
                  <DsCol>
                  </DsCol>
                </DsRow>
              </DsAccordion>

              <DsRow padding-top="sm" />

            </DsCol>
          </DsRow>
        </DsCol>



        <DsRow margin-top="sm" margin-col-bottom="xxxs" content="end">
      <DsCol col="3">
        <DsRow padding-bottom="micro" padding-top="micro" padding-left="micro" padding-right="sm" content="end" >
          <DsButton type="reset" variation="secondary" kind="danger" disabled="false" label="Reset" />
        </DsRow>
      </DsCol>
    </DsRow>




</DsForm>
    </div>
    <br />
  </>
}

export default GeneralForm