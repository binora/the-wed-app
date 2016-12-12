import { PHONE_TEXT_CHANGE } from '../actions/actionTypes';


const initialLoginState = {
  isLoggedIn : false,
  phone : ""
};

const login = (state = initialLoginState, action) => {
  switch(action.type) {

    case PHONE_TEXT_CHANGE :
    return {...state, phone : action.phone};

    default :
    return state;
  }
};

export default login;
