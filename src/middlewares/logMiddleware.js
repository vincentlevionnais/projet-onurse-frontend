import axios from 'axios';

import {
  SUBMIT_LOGIN, connectUser, FETCH_USER_INFOS, saveUserInfos,
} from 'src/actions/login';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().log;

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
          console.log(response);
          store.dispatch(connectUser(response.data.token));
        })
        .catch((error) => {
          console.log(error);
          alert('Une erreur est survenue, Merci de réessayer');
        });

      break;
    }
    case FETCH_USER_INFOS:

      axios.get(
        'http://35.173.138.41/projet-o-nurse/public/api/index',

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveUserInfos(response.data.id, response.data.firstname));
        })
        .catch((error) => {
          console.log(error);
          alert('Une erreur est survenue lors de la récuperation des informations utilisateurs.');
        });

      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default logMiddleware;
