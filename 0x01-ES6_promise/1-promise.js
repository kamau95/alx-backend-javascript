/*
export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success === true) {
      const niceObject = {
        status: 200,
        body: 'Success',
      };
      resolve(niceObject);
    } else {
      const badObject = {
        message: 'The fake API is not working currently',
      };
      reject(badObject);
    }
  });
  return promise;
}
*/
/*
getFullResponseFromAPI().then((response) => {
  console.log(response);
}); */
export default function getFullResponseFromAPI(success) {
  const arr = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return arr;
}
