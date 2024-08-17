import ActionTypes from '../constants';

const initialState = {
    users: [],
    loading: false,
    error: null,
  };

const searchReducer  = (state = initialState, action) => {

  
    switch (action.type) {
        
        case ActionTypes.LOADING:

            return {
                ...state,
                loading: true,
                error: null,
            }
       
        case ActionTypes.SEARCH_USERS_REQUEST_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null
            }
        case ActionTypes.SEARCH_USERS_REQUEST_FAILURE:
            return {
                ...state,
                users: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default searchReducer;