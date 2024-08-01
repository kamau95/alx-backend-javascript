/*
export default function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    resolve(true);
  });
  return promise;
}
getResponseFromAPI().then((response) => {
  console.log(response);
});
*/
/* eslint-disable */
export default function getResponseFromAPI() {
  return (new Promise((resolve, reject) => {}));
}
