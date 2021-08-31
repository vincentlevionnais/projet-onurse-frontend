import axios from 'axios';

import { MANAGE_SETTINGS_SUBMIT, DELETE_SUBMIT, cleanInput } from 'src/actions/settings';
import { logOut } from 'src/actions/login';

const settingsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case MANAGE_SETTINGS_SUBMIT: {
      const { email, password } = store.getState().settings;

      const { id } = store.getState().log;

      if (email !== '') {
        axios.put(
          `http://35.173.138.41/projet-o-nurse/public/api/nurses/${id}`,
          {
            email: email,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
          .then((response) => {
            alert('Email changé');
            store.dispatch(cleanInput());
            store.dispatch(logOut());
          })
          .catch((error) => {
            console.log(error);
            alert('Une erreur est survenue, merci de réessayer');
          });
      }
      else {
        axios.put(
          `http://35.173.138.41/projet-o-nurse/public/api/nurses/${id}`,
          {
            password: password,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
          .then((response) => {
            alert('Mot de passe changé');
            store.dispatch(cleanInput());
            store.dispatch(logOut());
          })
          .catch((error) => {
            console.log(error);
            alert('Une erreur est survenue, merci de réessayer');
          });
      }
    }
      break;

    case DELETE_SUBMIT: {
      const { id } = store.getState().log;

      axios.delete(
        `http://35.173.138.41/projet-o-nurse/public/api/nurses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          alert('Votre compte et toute ses données ont étés supprimées');
          // action utilisé lors de la deco (suppression token et logged à false)
          store.dispatch(logOut());
        })
        .catch((error) => {
          console.log(error);
          alert('Une erreur est survenue, merci de réessayer');
        });
    }
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default settingsMiddleware;
