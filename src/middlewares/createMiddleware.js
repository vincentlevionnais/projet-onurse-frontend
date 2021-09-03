import axios from 'axios';
import { SUBMIT_CREATE_ACCOUNT_FORM, cleanInput } from 'src/actions/create';
// import { connectUser } from 'src/actions/login';

const createMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CREATE_ACCOUNT_FORM: {
      const {
        lastName, firstName, email, password, phone,
      } = store.getState().create;

      axios.post(
        'http://35.173.138.41/projet-o-nurse/public/api/login',
        {
          lastName: lastName,
          firstName: firstName,
          email: email,
          password: password,
          phone: phone,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          alert('Compte crée');
          store.dispatch(cleanInput());
        })
        .catch((error) => {
          alert('Adresse mail déjà utilisée');
        });
      break;
    }

    default:
  }

  next(action);
};

export default createMiddleware;
