import { makeRequest } from './baseService'

export const getModelsList = () => makeRequest('Cars/Models')
export const getModelByCode = (code: string) => makeRequest(`Cars/Model/${code}`)
