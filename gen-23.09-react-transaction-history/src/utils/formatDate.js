export const formatDate = (date) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${month} ${day}, ${year}`
}

export const formatDateWithTime = (date) => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return formatDate(date) + " " + `${hour}:${minute}:${second}`
}
