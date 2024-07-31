/*  export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const [index, value] of array.entries()) {
    newArray[index] = `${appendString}${value}`;
  }
  return newArray;
}
*/
export default function appendToEachArrayValue(array, appendString) {
  const arrayEnd = [];
  for (const idx of array) {
    arrayEnd.push(`${appendString}${idx}`);
  }

  return arrayEnd;
}
