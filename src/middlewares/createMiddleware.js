import axios from 'axios';
import { SUBMIT_CREATE_ACCOUNT_FORM } from 'src/actions/create';

const createMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CREATE_ACCOUNT_FORM: {
      const {
        lastName, firstName, email, password, phone,
      } = store.getState().create;

      console.log('soumission');

      axios.post(
        'http://35.173.138.41/projet-o-nurse/public/api/nurses',
        {
          lastName: lastName,
          firstName: firstName,
          email: email,
          password: password,
          phone: phone,
        },
      )
        .then((response) => {
          // console.log(response);
          // TODO le back me renvoi un token à la creation d'un nouveau nurse?
          // todo si oui je dispatch connectUser
          store.dispatch(/* todo */);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    default:
  }

  next(action);
};

export default createMiddleware;
