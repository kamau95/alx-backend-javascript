import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup([firstName, lastName, fileName]) {
  const prom1 = signUpUser(firstName, lastName);
  const prom2 = uploadPhoto(fileName);
  return Promise.allSettled(prom1, prom2)
    .then((values) => {
      const result = [];
      values.forEach((element) => {
        if (element.status === 'fullfilled') {
          result.push({ status: element.status, value: element.value });
        } else {
          result.push({ status: element.status, value: `${element.reason}` });
        }
      });
      return result;
    });
}
