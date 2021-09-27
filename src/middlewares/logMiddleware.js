import axios from 'axios';

import {
  SUBMIT_LOGIN, connectUser, FETCH_USER_INFOS,
  saveUserInfos, MANAGE_POPUP_SUBMIT,
  MANAGE_RESET_PASSWORD_SUBMIT, logAfterReset,
  getTokenAndRedirect,
} from 'src/actions/login';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().log;

      axios.post(
        'http://34.201.19.168/projet-onurse-backend/public/api/login_check',
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
        'http://34.201.19.168/projet-onurse-backend/public/api/index',

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

      axios.post(
        'http://34.201.19.168/projet-onurse-backend/public/reset-password',
        {
          email: popupEmail,
        },

      )
        .then((response) => {
          // TODO stocker une valeur en localstorage??
          // stocker le token
          // isResetSubmit à true
          store.dispatch(getTokenAndRedirect(response.data.token));
          alert('Un mail vient de vous être envoyé, merci de cliquer sur le lien pour redéfinir votre mot de passe');
        })
        .catch((error) => {
          console.log(error);
          alert('Une erreur est survenue, Merci de réessayer');
        });
      break;
    }

    case MANAGE_RESET_PASSWORD_SUBMIT: {
      const { password, confirmationPassword, token } = store.getState().log;
      console.log(token);

      axios.post(
        `http://34.201.19.168/projet-onurse-backend/public/reset-password/reset/${token}`,
        {
          password: password,
          confirmationPassword: confirmationPassword,
        },

      )
        .then((response) => {
          // rediriger vers login et vider les input
          // isResetSubmit à false
          store.dispatch(logAfterReset());
          alert('Mot de passe modifié');
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
