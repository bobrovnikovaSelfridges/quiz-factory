const CHAR_LIMIT = 9

export function breakLongWords(words: string): string {
  if (words.includes('-') || words.includes('-')) {
    return words
  }
  return words
    .split(' ')
    .map((word: string) => {
      // Разделение после 9 символа
      if (word.length > CHAR_LIMIT) {
        return `${word.slice(0, CHAR_LIMIT)}\u00ad${word.slice(CHAR_LIMIT)}`
      }
      return word
    })
    .join(' ')
}
