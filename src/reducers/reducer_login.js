import { PHONE_TEXT_CHANGE } from '../actions/actionTypes';


const initialLoginState = {
  isLoggedIn : false,
  phone : ""
};

const login = (state = initialLoginState, action) => {
  switch(action.type) {

    case PHONE_TEXT_CHANGE :
    if (action.phone.length > 10) {
      console.log(action);
      return state;
    }
    return Object.assign({}, state, {phone : action.phone});

    default :
    return state;
  }
};

export default login;
