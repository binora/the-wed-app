import { REQUEST_LOGIN, LOGIN_SUCCESS, PHONE_TEXT_CHANGE } from './actions';

export function authenticateUser(phone) {
  return (dispatch) => {
    dispatch(requestLogin());
    setTimeout( () => {
      let data = {
        user : "binny arora",
        events :  events
      };
      dispatch(loginSuccess(data))
    }, 2000)
  }
}

export function onChangeText(text) {
  return {
    type : PHONE_TEXT_CHANGE,
    phone : text
  }
}

var events = [
  {
    "event_id"  : 1,
    "event_name" : "Shagun",
    "timestamp" : "2017-04-12 16:00:00",
    "description" : "description for shagun event"
  },
  {
    "event_id"  : 2,
    "event_name" : "Sangeet",
    "timestamp" : "2017-04-12 18:00:00",
    "description" : "description for sangeet event"
  },
  {
    "event_id"  : 3,
    "event_name" : "Shaadi",
    "timestamp" : "2017-04-13 14:00:00",
    "description" : "description for Shaadi"
  }
]
