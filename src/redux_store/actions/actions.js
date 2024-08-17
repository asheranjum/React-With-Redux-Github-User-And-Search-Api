import ActionTypes from "../constants";
import * as api from '../api/index';


export const getUsers = (token) => async (dispatch) => {

  
    const response = await api.getUsers(token).then(res => {

       res = JSON.parse(res);
   
        dispatch({
            type: ActionTypes.USER_LIST_REQUEST_SUCCESS,
            payload: res,
        });

    }).catch(err => {
        // console.log('err', err)
        dispatch({
            type: ActionTypes.USER_LIST_REQUEST_FAILED,
            payload: err,
        });
        
    })
}


export const getSearchUser = (query,token) => async (dispatch) => {

        dispatch({
            type: ActionTypes.LOADING,
            payload: true,
        });
    
    const response = await api.getSearchUser(query,token).then(res => {
        const {items , total_count , incomplete_results} = res;

        if(query != "" && items.length != 0)
        {
            dispatch({
                type: ActionTypes.SEARCH_USERS_REQUEST_SUCCESS,
                payload: items,
            });
    
        }
        else
        {
            dispatch({
                type: ActionTypes.SEARCH_USERS_REQUEST_FAILURE,
                payload: "Not Found",
            });
            
        }

    }).catch(err => {
        // console.log('err', err)
        dispatch({
            type: ActionTypes.SEARCH_USERS_REQUEST_FAILURE,
            payload: err,
        });
        
    })
}

