import http from '../utils/http'
import { ImportFirst } from '../shared/Table/ImportsFirst/Table.mockdata'
import { ImportFirstCreator } from '../components/ImportsFirst/ImportFirstForm'

export const getAllImportsFirst = () =>
  http
    .get<ImportFirst[]>('/importsfirst')
    .then(res => res.data)

export const getImportsFirstByPartNumberService = (partNumber: string) =>
  http
    .get<ImportFirst[]>(`/importsfirst/findByPartNumber/${partNumber}`)
    .then(res => res.data)


export const createSingleImportFirst = (importfirst: ImportFirstCreator) =>
  http
    .post('/importsfirst', importfirst)

export const updateSingleImportFirst = ({
  id,
  partNumber,
  ecode,
  nomenclature,
  unNumberCode,
  unNumberDescription,
  ghsClassCode,
  ghsDescription,
  storageConditionCode,
  storageConditionDescription,
  manufacturerMfir,
  manufacturerName,
  manufacturerCageCode
}: ImportFirst) =>
  http
    .patch(`/importsfirst/${id}`, {
      ...(partNumber && { partNumber }),
      ...(ecode && { ecode }),
      ...(nomenclature && { nomenclature }),
      ...(unNumberCode && { unNumberCode }),
      ...(unNumberDescription && { unNumberDescription }),
      ...(ghsClassCode && { ghsClassCode }),
      ...(ghsDescription && { ghsDescription }),
      ...(storageConditionCode && { storageConditionCode }),
      ...(storageConditionDescription && { storageConditionDescription }),
      ...(manufacturerMfir && { manufacturerMfir }),
      ...(manufacturerName && { manufacturerName }),
      ...(manufacturerCageCode && { manufacturerCageCode }),
    })

export const deleteSingleImportFirst = (id: string) =>
  http
    .delete(`/importsfirst/${id}`)