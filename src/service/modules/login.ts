import { http, JSONValue } from "../index"

export const loginApi = {
  getValidationCode: '/validation_codes',
  login: 'session',
}

export const sendvalidationCode = (data: Record<string, JSONValue> | undefined) => {
  return http.post(loginApi.getValidationCode, data)
}

export const login = (data: Record<string, JSONValue>) => {
  return http.post<{jwt: string}>(loginApi.login, data)
}