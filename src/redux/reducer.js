<<<<<<< HEAD
const initialState = { token: '' };

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case 'token': {
      return {
        ...state,
        token: payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'token':
//       return { ...state, token: action.payload };
//     default:
//       return state;
//   }
// }

// export default reducer;
=======
const initialState = { token: "" };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "token":
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

export default reducer;
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
