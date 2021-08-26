import { UPDATE_CREATE_FIELD, CLEAN_INPUT } from 'src/actions/create';

const initialState = {
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  phone: '',
  // suite à compte crée
  isCreate: false,
};

const createAccountReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CREATE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CLEAN_INPUT:
      return {
        ...state,
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        phone: '',
        isCreate: true,
      };
    default:
      return state;
  }
};

export default createAccountReducer;
