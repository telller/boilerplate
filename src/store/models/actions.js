import * as ModelService from 'services/models.service'
// import showError from 'showError'
import * as types from './types'
import { minBy } from 'lodash'

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
    const minTrim = minBy(currentModel.trims, 'price')
    const minColor = minBy(minTrim.colors, 'price')
    const selectedModel = {
      trip: minTrim.name,
      color: minColor.name,
      priceTrip: minTrim.price,
      priceColor: minColor.price,
      imageUrl: minColor.imageUrl,
    }
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: false } })
    dispatch({ type: types.SET_SELECTED_MODEL, payload: { selectedModel } })
    dispatch({ type: types.GET_MODEL_SUCCESS, payload: { currentModel } })
  } catch (err) {
    dispatch({ type: types.TOOGLE_GLOBAL_LOADING, payload: { globalLoading: false } })
    console.error(err)
    // showError(err)
  }
}

export const setSelectedModel = (selectedModel) => (dispatch) => {
  dispatch({ type: types.SET_SELECTED_MODEL, payload: { selectedModel } })
}
