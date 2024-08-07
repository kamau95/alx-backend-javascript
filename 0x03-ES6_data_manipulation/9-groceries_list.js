export default function groceriesList() {
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const myMap = new Map();
  for (const key of Object.keys(obj)) {
    myMap.set(key, obj[key]);
  }
  return myMap;
}
