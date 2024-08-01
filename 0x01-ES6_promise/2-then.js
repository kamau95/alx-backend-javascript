/*
export default function handleResponseFromAPI(promise) {
  // eslint-disable-next-line no-unused-vars
  const goodObject = {
    status: 200,
    body: 'success',
  };
  promise
    .then((goodObject) => {
      console.log('Got a response from the API');
      return goodObject;
    })
    .catch((error) => {
      console.log('Got a response from the API');
      return error;
    });
}
*/
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
}
