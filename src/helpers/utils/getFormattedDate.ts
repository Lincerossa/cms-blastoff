
type GetFormattedDate = (date: Date) => string

const getFormattedDate: GetFormattedDate = (date: Date) => ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
date.getFullYear()

export default getFormattedDate