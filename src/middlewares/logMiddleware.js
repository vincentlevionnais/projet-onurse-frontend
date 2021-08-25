import axios from 'axios';

import { SUBMIT_LOGIN, connectUser } from 'src/actions/login';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().log;
      console.log('soumission');
      axios.post(
        'http://35.173.138.41/projet-o-nurse/public/api/login_check',
        {
          username: email,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data.token);
          // console.log(response.headers('set-cookie'));
          console.log(response.headers);
          // console.log(response.headers['set-cookie']);
          store.dispatch(connectUser(response.data.token));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(
          console.log('soumission finally'),
        );

      break;
    }

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default logMiddleware;
