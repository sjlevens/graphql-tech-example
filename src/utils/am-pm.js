const amPm = hour => (hour <= 11 ? (hour === 0 ? `12am` : `${hour}am`) : `${hour - 12}pm`)
export default amPm
