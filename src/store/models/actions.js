import * as ModelService from 'services/models.service'
// import showError from 'showError'
import * as types from './types'
import { get } from 'lodash'

export const getModelsList = () => async (dispatch) => {
  try {
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: true } })
    const modelsList = await ModelService.getModelsList()
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: false } })
    dispatch({ type: types.GET_MODELS_LIST_SUCCESS, payload: { modelsList } })
  } catch (err) {
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: false } })
    console.error(err)
    // showError(err)
  }
}

export const getModelByCode = (code) => async (dispatch) => {
  try {
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: true } })
    const currentModel = await ModelService.getModelByCode(code)
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: false } })
    dispatch({ type: types.GET_MODEL_SUCCESS, payload: { currentModel } })
  } catch (err) {
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: false } })
    console.error(err)
    // showError(err)
  }
}
