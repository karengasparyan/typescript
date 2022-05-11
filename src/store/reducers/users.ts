import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from '../actions/users';
// import Account from "../../helpers/Account";

const initialState = {
  user: {},
  // token: Account.getToken(),
  // users: [],
  // dataCount: 0,
  // errorMessage: null,
  // projects: [],
};

interface action {
  type: string,
  payload: {
    data: any
  }
}

export default function reducer(state: object = initialState, action: action) {
  switch (action.type) {
    case SIGN_IN_REQUEST: {
      return {
        ...state,
        errorMessage: null,
      };
    }
    case SIGN_IN_SUCCESS: {
      const {user, token} = action.payload.data;
      // Account.setAccount(user);
      // Account.setToken(token);
      return {
        ...state,
        token,
        user,
      };
    }
    default: {
      return state;
    }
  }
}
