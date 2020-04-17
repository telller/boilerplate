export const GET_MODELS_LIST_SUCCESS = 'models.GET_MODELS_LIST_SUCCESS'
export const TOOGLE_GLOBAL_LOADING = 'models.TOOGLE_GLOBAL_LOADING'
export const SET_SELECTED_MODEL = 'models.SET_SELECTED_MODEL'
export const GET_MODEL_SUCCESS = 'models.GET_MODEL_SUCCESS'

export interface Car {
  priceFrom: string
  imageUrl: string
  name: string
  code: string
}

export interface CarColor {
  imageUrl: string
  iconUrl: string
  price: number
  name: string
}

export interface CarTrim {
  colors: Array<CarColor>
  price: number
  name: string
}

export interface selectedModel {
  colors: Array<CarColor>
  selectedColor: CarColor
  price: number
  name: string
}

export interface currentModel {
  trims: Array<CarTrim>
  code: string
  name: string
}

export interface Models {
  selectedModel: selectedModel
  currentModel: currentModel
  globalLoading: boolean
  modelsList: Array<Car>
  merge: (any) => any
}
