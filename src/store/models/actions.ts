import * as ModelService from 'services/models.service'
import * as types from './types'
import { minBy } from 'lodash'

export const getModelsList = () => async dispatch => {
  try {
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: true } })
    const modelsList: Array<types.Car> = await ModelService.getModelsList()
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: false } })
    dispatch({ type: types.GET_MODELS_LIST_SUCCESS, payload: { modelsList } })
  } catch (err) {
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: false } })
    console.error(err)
  }
}

export const getModelByCode = (code: string) => async dispatch => {
  try {
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: true } })
    const currentModel: types.currentModel = await ModelService.getModelByCode(code)
    const minTrim: types.CarTrim = minBy(currentModel.trims, 'price')
    const selectedColor: types.CarColor = minBy(minTrim.colors, 'price')
    dispatch({ type: types.SET_SELECTED_MODEL, payload: { selectedModel: { ...minTrim, selectedColor } } })
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: false } })
    dispatch({ type: types.GET_MODEL_SUCCESS, payload: { currentModel } })
  } catch (err) {
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: false } })
    console.error(err)
  }
}

export const setSelectedModel = selectedModel => dispatch => {
  dispatch({ type: types.SET_SELECTED_MODEL, payload: { selectedModel } })
}

export const toogleGlobalLoading = () => (dispatch, getState) => {
  const globalLoading: boolean = !getState().models.globalLoading
  dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading } })
}
