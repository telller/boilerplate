const getUrl = url => `${process.env.BASE_URL}/${url}`

const makeRequest = async (
  path: string = '',
  options: any = {},
  json: boolean = true,
  text?: boolean,
  isHeaders?: boolean
) => {
  options = {
    method: 'GET',
    headers: {
      'X-API-KEY': process.env.X_API_KEY,
      Accept: 'application/json',
    },
    ...options,
  }

  const response = await fetch(getUrl(path), options)

  if (!response.ok) {
    throw new Error('Req failed')
  }

  if (text) {
    return isHeaders ? { text: response.text(), headers: response.headers } : response.text()
  }
  if (json) return response.json()

  return response
}

const makePostRequest = async (path: string, data: any, responseAsJson: boolean = false) => {
  const options = {
    method: 'POST',
    headers: {
      'X-API-KEY': process.env.X_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data || {}),
  }
  return await makeRequest(path, options, responseAsJson)
}


export { makeRequest, makePostRequest }
