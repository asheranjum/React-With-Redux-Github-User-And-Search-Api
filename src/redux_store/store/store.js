import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk"; 
import userListReducer from "../reducers/userListReducer";


const rootReducer = combineReducers(
    {
        // search_users: searchReducer,
        users: userListReducer,
    }
);

const composeEnhancers = composeWithDevTools({
    trace: false,
});


const configureStore = () => {
    return createStore(rootReducer, compose(composeEnhancers(applyMiddleware(thunk))));
}

export default configureStore;