import { makeRequest } from './baseService'

export const getUserById = id => makeRequest(`api/1/users/${id}`)
