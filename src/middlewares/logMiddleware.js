import axios from 'axios';

import {
  SUBMIT_LOGIN, connectUser, FETCH_USER_INFOS,
  saveUserInfos, MANAGE_POPUP_SUBMIT,
  MANAGE_RESET_PASSWORD_SUBMIT,
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

    case MANAGE_POPUP_SUBMIT: {
      const { popupEmail } = store.getState().log;
      // todo verifier l url avec le back
      axios.post(
        'http://35.173.138.41/projet-o-nurse/public/reset-password',
        {
          username: popupEmail,
        },

      )
        .then((response) => {
          // TODO voir avec le back, stocker le token envoyer
          // TODO + fermer la popup et vider tout les input
        })
        .catch((error) => {
          console.log(error);
          alert('Une erreur est survenue, Merci de réessayer');
        });
      break;
    }

    case MANAGE_RESET_PASSWORD_SUBMIT: {
      const { password } = store.getState().log;
      // TODO verifier l 'url de post
      axios.post(
        'http://35.173.138.41/projet-o-nurse/public/api/login_check',
        {
          password: password,
        },

      )
        .then((response) => {
          // TODO voir avec le back + rediriger vers login et vider les input
          // TODO voir TO LOGIN
        })
        .catch((error) => {
          console.log(error);
          alert('Une erreur est survenue, Merci de réessayer');
        });
      break;
    }

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default logMiddleware;
