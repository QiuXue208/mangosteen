import dayjs from 'dayjs'

export const firstDayOfCurMonth = () => {
  return dayjs().startOf('month').valueOf()
}

export const lastDayOfCurMonth = () => {
  return dayjs().endOf('month').valueOf()
}

export const firstDayOfPrevMonth = () => {
  let time = dayjs()
  time = time.set('month', time.month() - 1)
  return dayjs(time).startOf('month').format('YYYY-MM-DD')
}

export const lastDayOfPrevMonth = () => {
  let time = dayjs()
  time = time.set('month', time.month() - 1)
  return dayjs(time).endOf('month').format('YYYY-MM-DD')
}

export const firstDayOfYear = () => {
  return dayjs().startOf('year').valueOf()
}

export const lastDayOfYear = () => {
  return dayjs().endOf('year').valueOf()
}