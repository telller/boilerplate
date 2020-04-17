import { makeRequest, makePostRequest } from './baseService'

interface LeadDataModel {
  modelName: 'string',
  trimName: 'string',
  colorName: 'string'
}

export const getModelsList = () => makeRequest('Cars/Models')
export const getModelByCode = (code: string) => makeRequest(`Cars/Model/${code}`)
export const leadModel = (data: LeadDataModel) => makePostRequest('Cars/lead', data)
