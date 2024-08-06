export default function getListStudentIds(lists) {
  const arr = [];
  if (!Array.isArray(lists)) {
    return [];
  }
  lists.forEach((element) => arr.push(element.id));
  return arr;
}
