export default function createInt8TypedArray(length, position, value) {
  // check bounds
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  // set value at specified position
  const view = new Int8Array(buffer);
  view.set([value], position);
  return new DataView(buffer);
}
