import α from 'color-alpha'


const OPAQUE_OPACITY_LEVEL = 1
export const getColorOpacityByIndex = (
  currentNumber: number,
  color: string,
  amountOfFields = 5,
): string => {
  const step = OPAQUE_OPACITY_LEVEL / amountOfFields
  let counterOpacity = 1 + step
  const generatedColors = []
  for (let fieldNumber = 0; fieldNumber < amountOfFields; fieldNumber++) {
    counterOpacity -= step
    generatedColors.push(α(color, counterOpacity))
  }
  return generatedColors[currentNumber]
}
