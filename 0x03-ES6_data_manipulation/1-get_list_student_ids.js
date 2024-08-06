/*
export default function getListStudentIds(lists) {
  const arr = [];
  if (!Array.isArray(lists)) {
    return [];
  }
  lists.forEach((element) => arr.push(element.id));
  return arr;
}
*/
const getListStudentIds = (myArray) => {
  if (!Array.isArray(myArray)) {
    return [];
  }
  return myArray.map((studentId) => studentId.id);
};

export default getListStudentIds;
