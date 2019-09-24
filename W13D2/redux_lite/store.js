// Store Class



class Store {
  constructor(rootReducer, appliedMiddleware){
    this.rootReducer = rootReducer;
    this.state = this.rootReducer({}, '');
    this.subscriptions = [];
    this.appliedMiddleware = appliedMiddleware;
  }

  getState() {
    return Object.assign({}, this.state);
  }

  dispatch(action) {
    this.state = this.appliedMiddleware(this, this.rootReducer)(action);
  }

  subscribe(callback){
    this.subscriptions.push(callback);
  }
}

// combineReducers 

function combineReducers(reducers) {
  return (prevState, action, subscriptions) => {
    const newObjects = {};
    let changed = false;
    Object.keys(reducers).forEach(key => {
      const newValue = reducers[key](prevState[key], action);
      if (newValue !== prevState[key]) changed = true;
      newObjects[key] = newValue;
    })

    if (subscriptions) {
      if (changed) subscriptions.forEach(cb => {
        cb(newObjects);
      })
    }

    return newObjects;
  }
}

function applyMiddleware(...middlewares){
  return (store, rootReducer) => {
    return (action) => {
      const middlewareDup = middlewares.slice(0);
      const invokeNextMiddleware = function (action){
        let next = middlewareDup.shift();
        if (!next) {
          return rootReducer(store.getState(), action, store.subscriptions);
        }
        return next(store)(invokeNextMiddleware)(action);
      }
      const anything = invokeNextMiddleware(action);
      return invokeNextMiddleware(action);
    }
  }
}

// define a reducer for user:
const userReducer = (oldUser = null, action) => {
  if (action.type === "new user") {
    return action.user;
  }
  return oldUser;
};

// create a rootReducer:
const rootReducer = combineReducers({
  user: userReducer
});

const middleware1 = store => next => action => {
  console.log("Middleware 1!");
  next(action);
}

const middleware2 = store => next => action => {
  console.log("Middleware 2!");
  next(action);
}
// create a store using the rootReducer:
const store = new Store(rootReducer, applyMiddleware(middleware1, middleware2));

// get the state:
store.getState(); // => {}

// invoke the dispatch function to update the user key:
const action = {
  type: "new user",
  user: "Jeffrey Fiddler"
};

store.dispatch(action);
console.log(store.getState()); // => { user: "Jeffrey Fiddler" }