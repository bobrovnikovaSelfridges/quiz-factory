import {breakLongWords} from '../break-long-words'

const britain = ' Великобри­тания'

describe('Перенос строк после 12 символа', () => {
  it('Производит валидный перенос слова', () => {
    expect(breakLongWords(' Великобритания')).toBe(britain)
  })
  it('Если в слове есть дефис, возвращает его в первоначальном виде', () => {
    expect(breakLongWords('Велико-британия')).toBe('Велико-британия')
  })
  it('Производит валидный перенос слов, если в предложении больше одного слова', () => {
    expect(breakLongWords(' Великобритания Великобритания')).toBe(
      britain + britain,
    )
  })
})
