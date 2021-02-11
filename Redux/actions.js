import ActionTypes from './actionTypes';

export const UserAction = (userinfo) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.USER_INFO,
      payload: userinfo,
    });
  };
};

export const Action_2 = (any_Argument) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.ACTION_TYPE_2,
      payload: any_Argument,
    });
  };
};
