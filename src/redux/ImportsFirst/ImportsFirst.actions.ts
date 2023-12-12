import { Thunk } from ".."
import { ImportFirstCreator } from "../../components/ImportsFirst/ImportFirstForm"
import {
  getAllImportsFirst,
  updateSingleImportFirst,
  createSingleImportFirst,
  deleteSingleImportFirst,
  getImportsFirstByPartNumberService
} from "../../services/ImportsFirst.service"
import { ImportFirst } from "../../shared/Table/ImportsFirst/Table.mockdata"

export const updateImportFirst =
  (newImportFirst: ImportFirst): Thunk =>
  async (dispatch) => {
    await updateSingleImportFirst(newImportFirst)
    dispatch(getImportsFirst())
  }

export const getImportsFirst =
  (): Thunk<ImportFirst[]> =>
  async (dispatch) => {
    const importsfirst = await getAllImportsFirst()
    console.log('fetched')
    dispatch({
      type: 'FETCH_IMPORTSFIRST',
      payload: importsfirst
    })    
  }

export const getImportsFirstByPartNumber =
  (partNumber: string): Thunk<ImportFirst[]> =>
  async (dispatch) => {
    const importsfirst = await getImportsFirstByPartNumberService(partNumber)
    console.log('fetched')
    dispatch({
      type: 'FETCH_IMPORTSFIRST_BY_PART_NUMBER',
      payload: importsfirst
    })
    return importsfirst
  }

export const insertNewImportFirst =
  (importfirst: ImportFirstCreator): Thunk =>
  async (dispatch) => {
    await createSingleImportFirst(importfirst)
    dispatch(getImportsFirst())
  }

export const deleteImportFirst =
  (importfirstId: string): Thunk =>
  async (dispatch) => {
    await deleteSingleImportFirst(importfirstId)
    dispatch(getImportsFirst())
  }