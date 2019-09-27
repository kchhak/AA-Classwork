import {createStore, applyMiddleware} from 'redux';
import thunk from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';


const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;

window.store = configureStore();