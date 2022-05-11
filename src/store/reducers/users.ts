import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
} from '../actions/users';
// import Account from "../../helpers/Account";

const initialState: userState = {
  user: {
    _id: '',
    email: '',
    key: NaN,
    phone: '',
    role: '',
    updatedAt: '',
    username: '',
    createdAt: '',
  },
  token: ''
  // token: Account.getToken(),
};

export interface userState {
  user: {
    _id: string,
    email: string,
    key: number,
    phone: string,
    role: string,
    updatedAt: string,
    username: string,
    createdAt: string,
  },
  token: string
}

export default function reducer(state: object = initialState, action: any) {
  switch (action.type) {
    case SIGN_IN_REQUEST: {
      return {
        ...state,
      };
    }
    case SIGN_IN_SUCCESS: {
      const {user, token}: {user: userState, token: userState} = action.payload.data
      // Account.setAccount(user);
      // Account.setToken(token);
      return {
        ...state,
        user,
        token,
      };
    }
    default: {
      return state;
    }
  }
}
