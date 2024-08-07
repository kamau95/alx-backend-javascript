export default function cleanSet(myset, start) {
  if (start === undefined || start.length === 0) {
    return '';
  }
  return Array.from(myset)
    .filter((value) => value.startsWith(start))
    .map((value) => value.slice(start.length))
    .join('-');
}
