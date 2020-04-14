import Immutable from 'seamless-immutable'
import * as types from './types'

const initialState = Immutable({
  selectedModel: { trip: '', color: '', priceTrip: 0, priceColor: 0, imageUrl: '' },
  globalLoading: false,
  currentModel: {},
  modelsList: [],
})

export default (state = initialState, action) => {
  const actions = {
    [types.SET_SELECTED_MODEL]: () => ({ selectedModel: { ...state.selectedModel, ...action.payload.selectedModel } }),
    [types.TOOGLE_GLOBAL_LOADING]: () => ({ globalLoading: action.payload.globalLoading }),
    [types.GET_MODELS_LIST_SUCCESS]: () => ({ modelsList: action.payload.modelsList }),
    [types.GET_MODEL_SUCCESS]: () => ({ currentModel: action.payload.currentModel }),
  }
  return actions[action.type] ? state.merge(actions[action.type]()) : state
}
