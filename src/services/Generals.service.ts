import http from '../utils/http'
import { General } from '../shared/Table/Generals/Table.mockdata'
import { GeneralCreator } from '../components/Generals/GeneralForm'

export const getAllGenerals = () =>
  http
    .get<General[]>('/generals')
    .then(res => res.data)

export const createSingleGeneral = (general: GeneralCreator) =>
  http
    .post('/generals', general)

export const updateSingleGeneral = ({ id, partNumber, ecode, stateGeneralEnum }: General) =>
  http
    .patch(`/generals/${id}`, {
      ...(partNumber && { partNumber }),
      ...(ecode && { ecode }),
      ...(stateGeneralEnum && { stateGeneralEnum }),
    })

export const deleteSingleGeneral = (id: string) =>
  http
    .delete(`/generals/${id}`)


export const createGeneralDraft = (
  general: 
  {
    id?: '',
    partNumber: '',
    ecode:  '',
    stateGeneralEnum: 'DRAFT '
  }) =>
  http
    .post('/generals', general)