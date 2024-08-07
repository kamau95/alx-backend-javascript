export default function cleanSet(myset, start) {
  return Array.from(myset)
    .filter((value) => value.startsWith(start))
    .map((value) => value.slice(start.length))
    .join('-');
}
