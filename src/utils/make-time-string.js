import amPm from './am-pm'
import { MINUTES_TO_HOUR } from './constants'

const makeTimeString = ({ startTime, endTime }) =>
  `${amPm(startTime * MINUTES_TO_HOUR)} - ${amPm(endTime * MINUTES_TO_HOUR)}`

export default makeTimeString
