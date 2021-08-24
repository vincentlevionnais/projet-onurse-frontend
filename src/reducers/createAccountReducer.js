const initialState = {
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  phoneNumber: '',

};

const createAccountReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default createAccountReducer;
