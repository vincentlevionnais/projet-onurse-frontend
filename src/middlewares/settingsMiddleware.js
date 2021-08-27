import axios from 'axios';

import { MANAGE_SETTINGS_SUBMIT, DELETE_SUBMIT } from 'src/actions/settings';

const settingsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case MANAGE_SETTINGS_SUBMIT: {
      const {
        email, password,
      } = store.getState().settings;

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
            console.log(response);
            // TODO dispatch action qui vide les input
            alert('Email changé');

            // store.dispatch(todo));
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
            console.log(response.data.token);
            alert('Mot de passe changé');
            // TODO dispatch action qui vide les input
            // store.dispatch(connectUser(todo);
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

        {},

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          alert('Compte supprimé');
          // TODO dispatch action qui supprime le token (du coup deco auto)
          // todo qu'est ce qu'on fait des données en base??
          // store.dispatch(todo);
        })
        .catch((error) => {
          console.log(error);
        });
    }
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default settingsMiddleware;
