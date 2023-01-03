import { JSONValue } from "../service/index"

type FData = {
  [k: string]: JSONValue
}

type Rule<T> = {
  key: keyof T
  message: string
  required?: boolean
  pattern?: RegExp
}

type Rules<T> = Rule<T>[]

export type { FData, Rule, Rules}

export const formValidate = <T extends FData>(formValue: T, rules: Rules<T>) => {
  type Errors = { [key in keyof T]?: string[] }
  let errors: Errors = {}

  for (let i = 0; i < rules.length; i++) {
    const { key, required, pattern, message } = rules[i] || {}
    if (!Object.prototype.hasOwnProperty.call(formValue, key)) continue
    const value = formValue[key]
    if (required && !value) {
      errors[key] = errors[key] || []
      errors[key]?.push(message)
    } else if (pattern && value && !pattern.test(value!.toString())) {
      errors[key] = errors[key] || []
      errors[key]?.push(message)
    }
  }

  return errors
}