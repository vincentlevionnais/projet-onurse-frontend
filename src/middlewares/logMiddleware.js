import axios from 'axios';

import { SUBMIT_LOGIN, connectUser } from 'src/actions/login';

// import { get } from 'src/utils/cookies';

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
          withCredentials: true,
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
// alainfirmier@liberal.com

// 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2Mjk4MTQ3NDIsImV4cCI6MTYyOTgxODM0Miwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWxhaW5maXJtaWVyQGxpYmVyYWwuY29tIn0.EvgdI98bxmjuKVpnVc1ayU6RCgJFYvWmWGcCw9YKgc1K1zRtDTWoY4djIrTU2pbEOeVN7ttwLl7pYt13gfcj318PwPqPiIiuxA5DwMXiPXf4VUvX5a6Ipwi994FaGIgEpYM945lGSbcH17EFnzEbFuf7xuAgN9be_MOpx7d5lhvqjtFwMliaQ5xfbge1jEFW1_JZoo1oHWZ15SwvDDz-QO0hIA0Okg0LBXLlVAjEt76cqPfI2GaAPPwiKzLXf4q89UpxNdSQyy3UdA_Kbulfg0UC_EZBsdaY8EhNReyeR_CMd86NTHGI7iL7d_C27wCe05Zj1YidNOJyWIeyWwrjkw'
