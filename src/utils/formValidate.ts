type FData = {
  [k: string]: undefined | null | string | number | FData
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

  rules.forEach((rule) => {
    const { key, required, pattern, message } = rule
    const value = formValue[key]

    if (required && !value) {
      errors[key] = errors[key] || []
      errors[key]?.push(message)
    } else if (pattern && !pattern.test(value!.toString())) {
      errors[key] = errors[key] || []
      errors[key]?.push(message)
    }
  })

  return errors
}