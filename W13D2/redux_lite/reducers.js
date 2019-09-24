const colorAction = {
  type: 'change color',
  newColor: 'red'
}

function colorReducer(oldColor = null, action){
  if (action.type === "change color"){
    return action.newColor;
  } else {
    return oldColor;
  }
}

const weaponAction = {
  type: 'rearm',
  newWeapon: 'katana'
}

function weaponReducer(oldWeapon = null, action) {
  if (action.type === "rearm") {
    return action.newWeapon;
  } else {
    return oldWeapon;
  }
}

console.log(colorReducer('green', colorAction))
console.log(weaponReducer('', weaponAction));


function combineReducers(reducers) {
  return (prevState, action) => {
    const newObjects = {};
    Object.keys(reducers).forEach(key => {
      newObjects[key] = reducers[key](prevState[key], action);
    })
    return newObjects;
  }
}

const myNoiseReducer = (prevState = "peace and quiet", action) => {
  switch (action.type) {
    case "noisy action":
      return action.noise;
    default:
      return prevState;
    }
};


const reducersObject = {
  colors: colorReducer,
  weapons: weaponReducer
};

const combinedReducer = combineReducers(reducersObject);

console.log(combinedReducer({}, ''));