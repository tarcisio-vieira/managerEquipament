import React, { useState, useEffect } from 'react'
import "@ds-prd-repo-react/components/dist/assets/ds-stencil.css";
import { DsBox, DsForm, DsButton, DsInput, DsRow, DsCol, DsH2 } from '@ds-prd-repo-react/components';
import { ImportFirst } from '../../shared/Table/ImportsFirst/Table.mockdata'

declare interface InitialFormState {
  id?: string
  partNumber: string
  ecode: string
  nomenclature: string
  unNumberCode: string
  unNumberDescription: string
  ghsClassCode: string
  ghsDescription: string
  storageConditionCode: string
  storageConditionDescription: string
  manufacturerMfir: string
  manufacturerName: string
  manufacturerCageCode: string
}

export interface ImportFirstCreator {
  partNumber: string
  ecode: string
  nomenclature: string
  unNumberCode: string
  unNumberDescription: string
  ghsClassCode: string
  ghsDescription: string
  storageConditionCode: string
  storageConditionDescription: string
  manufacturerMfir: string
  manufacturerName: string
  manufacturerCageCode: string
}

declare interface ImportFirstFormProps {
  form?: ImportFirst
  onSubmit?: (importfirst: ImportFirstCreator) => void
  onUpdate?: (importfirst: ImportFirst) => void
}

const ImportFirstForm: React.FC<ImportFirstFormProps> = (props) => {
  const initialFormState: InitialFormState = props.form
    ? {
      id: props.form.id,
      partNumber: props.form.partNumber ,
      ecode: props.form.ecode ,
      nomenclature: props.form.nomenclature ,
      unNumberCode: props.form.unNumberCode ,
      unNumberDescription: props.form.unNumberDescription ,
      ghsClassCode: props.form.ghsClassCode ,
      ghsDescription: props.form.ghsDescription ,
      storageConditionCode: props.form.storageConditionCode ,
      storageConditionDescription: props.form.storageConditionDescription ,
      manufacturerMfir: props.form.manufacturerMfir ,
      manufacturerName: props.form.manufacturerName ,
      manufacturerCageCode: props.form.manufacturerCageCode ,
    }
    : {
      partNumber: '',
      ecode: '',
      nomenclature: '',
      unNumberCode: '',
      unNumberDescription: '',
      ghsClassCode: '',
      ghsDescription: '',
      storageConditionCode: '',
      storageConditionDescription: '',
      manufacturerMfir: '',
      manufacturerName: '',
      manufacturerCageCode: ''
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

  const updateImportFirst = (importfirst: InitialFormState) => {
    const importfirstDto = {
      id: String(importfirst.id),
      partNumber: String(importfirst.partNumber),
      ecode: String(importfirst.ecode),
      nomenclature: String(importfirst.nomenclature),
      unNumberCode: String(importfirst.unNumberCode),
      unNumberDescription: String(importfirst.unNumberDescription),
      ghsClassCode: String(importfirst.ghsClassCode),
      ghsDescription: String(importfirst.ghsDescription),
      storageConditionCode: String(importfirst.storageConditionCode),
      storageConditionDescription: String(importfirst.storageConditionDescription),
      manufacturerMfir: String(importfirst.manufacturerMfir),
      manufacturerName: String(importfirst.manufacturerName),
      manufacturerCageCode: String(importfirst.manufacturerCageCode),

    }
    props.onUpdate &&
      props.onUpdate(importfirstDto)
  }

  const createImportFirst = (importfirst: InitialFormState) => {
    const importfirstDto = {
      partNumber: String(importfirst.partNumber),
      ecode: String(importfirst.ecode),
      nomenclature: String(importfirst.nomenclature),
      unNumberCode: String(importfirst.unNumberCode),
      unNumberDescription: String(importfirst.unNumberDescription),
      ghsClassCode: String(importfirst.ghsClassCode),
      ghsDescription: String(importfirst.ghsDescription),
      storageConditionCode: String(importfirst.storageConditionCode),
      storageConditionDescription: String(importfirst.storageConditionDescription),
      manufacturerMfir: String(importfirst.manufacturerMfir),
      manufacturerName: String(importfirst.manufacturerName),
      manufacturerCageCode: String(importfirst.manufacturerCageCode),
    }
    props.onSubmit &&
      props.onSubmit(importfirstDto)
  }

  const handleFormSubmit = () => {
    form.id
      ? updateImportFirst(form)
      : createImportFirst(form)

    setForm(initialFormState)
  }

  return <>
    <div style={{ 'marginTop': '10px', 'width': '90%' }}>
      <DsRow align-vertical="center" padding-bottom="micro" padding-top="micro">
        <DsCol col="12">
          <DsH2>
            GSE ImportFirst
          </DsH2>
        </DsCol>
      </DsRow>
      <DsBox padding-bottom="micro" padding-top="micro">
        <DsForm
          target="_self"
          name="form01"
          novalidate
        >
        <DsRow margin-top="sm" margin-col-bottom="sm" >
            <DsCol col="5">
              <DsRow padding-bottom="micro" padding-top="micro" padding-right="sm" content="end" >
                <DsInput
                  title-text="partNumber"
                  onchange={handleInputChange}
                  value={form.partNumber}
                  name="partNumber"
                  placeholder="..."
                  required
                />
              </DsRow>
            </DsCol>
            <DsCol col="2">
              <DsRow padding-bottom="micro" padding-top="micro" padding-right="sm" content="end" >
                <DsInput
                  title-text="ecode"
                  onchange={handleInputChange}
                  value={form.ecode}
                  name="ecode"
                  type="text"
                  placeholder="..."
                  required
                />
              </DsRow>
            </DsCol>
            <DsCol col="2">
              <DsRow padding-bottom="micro" padding-top="micro" padding-right="sm" content="end" >
                <DsInput
                  title-text="MFIR"
                  onchange={handleInputChange}
                  value={form.manufacturerMfir}
                  name="manufacturerMfir"
                  type="text"
                  placeholder="..."
                  required
                />
              </DsRow>
            </DsCol>
            <DsCol col="3">
              <DsRow padding-bottom="micro" padding-top="micro" padding-left="micro" padding-right="sm">
                <DsButton kind="default" show-icon="true" icon={form.id ? 'edit' : 'plus'} label={form.id ? 'Update' : 'Add'} onClick={handleFormSubmit} />
              </DsRow>
            </DsCol>
          </DsRow>
          <DsCol col="12">
            <DsRow padding-top="sm" />
          </DsCol>
        </DsForm>
      </DsBox>
    </div>
    <br />
  </>
}

export default ImportFirstForm