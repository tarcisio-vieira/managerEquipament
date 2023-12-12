export interface General {

  id?: string
  ecode: string
  partNumber: string
  stateGeneralEnum: string
  basicTechnologyEnum: string
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

  createdAt?: string
  updatedAt?: string
}

const Generals: General[] = [
  {
    id: '1',
    ecode: '',
    partNumber: '',
    stateGeneralEnum: 'DRAFT',
    basicTechnologyEnum: '',
    gseName: '',
    gseRespCompanyId: 0,
    usageEnum: '',
    manufacturerMfir: '',
    manufacturerName: '',
    manufacturerComName: '',
    manufacturerCageCode: '',
    measurementsLength: 0.00,
    measurementsHeight: 0.00,
    measurementsWidth: 0.00,
    measurementsDiameter: 0.00,
    measurementsWeight: 0.00,
    voltage: 0.00,
    cmmPartNumber: '',
    typeEnum: '',
    storageConditionCode: '',
    storageConditionDescription: '',
    unNumberCode: '',
    unNumberDescription: '',
    ghsClassCode: '',
    ghsClassDescription: '',
    technicalSpecification: '',
    briefOperationDescription: '',
    revision: 0,
    cmm: 'true',
    ceMark: 'true',
    calibrationRequired: 'true',
    repairable: 'true',
    frequencyUnit: '',
    maintenanceInformation: '',
    interchangeabilityClassEnum: '',
    serviceBulletinNumber: '',
    replacementObservation: '',
    frequency: 0,
    gseAtaSystemId: 0,
    replacementPartNumberId: 0,
    gseEqPartNumberId: 0,
    owner: 0,
    updatedby: 0,
    voltageUnitEnum: '',
  }
]

export default Generals
