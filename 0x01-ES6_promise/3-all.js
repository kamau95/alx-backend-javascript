/*
// eslint-disable-next-line import/prefer-default-export
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((response) => {
      console.log(response.body);
      return createUser();
    })
    .then((response) => {
      console.log(response.firstName);
      console.log(response.lastName);
    });
}
*/
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  Promise.all([promise1, promise2])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
