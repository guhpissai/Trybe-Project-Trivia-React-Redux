import { GET_LOGIN } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

export const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOGIN: {
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  }
  default:
    return state;
  }
};
