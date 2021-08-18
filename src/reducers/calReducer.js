import { UPDATE_LOGIN_FIELD, CONNECT_USER, LOG_OUT } from 'src/actions/auth';

const initialState = {
  events: [
    {
      id: '1',
      title: 'pansement genevieve',
      start: '2021/08/14',
      end: '2021/08/16',
    },
    {
      id: '2',
      title: 'pansement renéé',
      start: '2021/08/20',
      end: '2021/08/21',
    },
    {
      id: '3',
      title: 'pansement Jacques',
      start: '2021/08/25',
      end: '2021/08/26',
    },
  ],
  displayPopup: false,
};

const calReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

export default calReducer;
