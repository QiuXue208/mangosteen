import { http, JSONValue } from "../index"

export const loginApi = {
  getValidationCode: '/validation_codes',
}

export const sendvalidationCode = (data: Record<string, JSONValue> | undefined) => {
  return http.post(loginApi.getValidationCode, data)
}