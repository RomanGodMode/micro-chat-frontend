export const getNormalTime = (date: Date): string => {
  return `${date.getHours()}:${date.getMinutes()}`
}