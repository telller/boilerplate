import * as modelService from 'services/models.service'
import * as types from './types'
import { minBy } from 'lodash'

export const getModelsList = () => async dispatch => {
  try {
    dispatch(toogleGlobalLoading())
    const modelsList: Array<types.Car> = await modelService.getModelsList()
    dispatch({ type: types.GET_MODELS_LIST_SUCCESS, payload: { modelsList } })
    dispatch(toogleGlobalLoading())
  } catch (err) {
    dispatch(toogleGlobalLoading())
    console.error(err)
  }
}

export const getModelByCode = (code: string) => async dispatch => {
  try {
    dispatch(toogleGlobalLoading())
    const currentModel: types.currentModel = await modelService.getModelByCode(code)
    const minTrim: types.CarTrim = minBy(currentModel.trims, 'price')
    const selectedColor: types.CarColor = minBy(minTrim.colors, 'price')
    dispatch({ type: types.SET_SELECTED_MODEL, payload: { selectedModel: { ...minTrim, selectedColor } } })
    dispatch({ type: types.GET_MODEL_SUCCESS, payload: { currentModel } })
    dispatch(toogleGlobalLoading())
  } catch (err) {
    dispatch(toogleGlobalLoading())
    console.error(err)
  }
}

export const setSelectedModel = selectedModel => dispatch => {
  dispatch({ type: types.SET_SELECTED_MODEL, payload: { selectedModel } })
}

export const leadModel = data => async dispatch => {
  try {
    dispatch(toogleGlobalLoading())
    await modelService.leadModel(data)
    dispatch(toogleGlobalLoading())
    return true
  } catch (e) {
    dispatch(toogleGlobalLoading())
    return false
  }
}

export const toogleGlobalLoading = () => (dispatch, getState) => {
  const globalLoading: boolean = !getState().models.globalLoading
  dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading } })
}

