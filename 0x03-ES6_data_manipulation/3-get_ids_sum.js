export default function getStudentIdsSum(getListStudents) {
  const sum = getListStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0,
  );
  return sum;
}
