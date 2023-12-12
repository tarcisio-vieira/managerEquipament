import { Thunk } from ".."
import { GeneralCreator } from "../../components/Generals/GeneralForm"
import {
  getAllGenerals,
  updateSingleGeneral,
  createSingleGeneral,
  deleteSingleGeneral,
  createGeneralDraft,

} from "../../services/Generals.service"
import { General } from "../../shared/Table/Generals/Table.mockdata"

export const updateGeneral =
  (newGeneral: General): Thunk =>
  async (dispatch) => {
    await updateSingleGeneral(newGeneral)
    dispatch(getGenerals())
  }

export const getGenerals =
  (): Thunk<General[]> =>
  async (dispatch) => {
    const generals = await getAllGenerals()
    console.log('fetched')
    dispatch({
      type: 'FETCH_GENERALS',
      payload: generals
    })
  }

export const insertNewGeneral =
  (general: GeneralCreator): Thunk =>
  async (dispatch) => {
    await createSingleGeneral(general)
    dispatch(getGenerals())
  }

export const deleteGeneral =
  (generalId: string): Thunk =>
  async (dispatch) => {
    await deleteSingleGeneral(generalId)
    dispatch(getGenerals())
  }

  export const insertNewDraftGeneral =
  (general: 
    {
      id?: '',
      partNumber: '',
      ecode:  '',
      stateGeneralEnum: 'DRAFT '
    }): Thunk =>
  async (dispatch) => {
    await createGeneralDraft(general)
    dispatch(getGenerals())
  }

  