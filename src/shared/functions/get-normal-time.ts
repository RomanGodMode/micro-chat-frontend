const getNormalizedCount = (count: number): string => {

  return String(count).length === 1
    ? ("0" + count)
    : count.toString()
}

export const getNormalTime = (date: Date): string => {
  return `${getNormalizedCount(date.getHours())}:${getNormalizedCount(date.getMinutes())}`
}