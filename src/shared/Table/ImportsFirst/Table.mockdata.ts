export interface ImportFirst{
  id: string
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
  createdAt ?: string
  updatedAt ?: string
}

const ImportsFirst: ImportFirst[] = [
  {
    id: '1',
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
]

export default ImportsFirst

