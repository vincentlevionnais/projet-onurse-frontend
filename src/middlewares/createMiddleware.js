import axios from 'axios';
import { MANAGE_SUBMIT } from 'src/actions/create';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case MANAGE_SUBMIT: {
      const {
        lastName, firstName, email, password, phone,
      } = store.getState().create;

      console.log('soumission');

      axios.post(
        'http://35.173.138.41/projet-o-nurse/public/api/login_check',
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

export default logMiddleware;
