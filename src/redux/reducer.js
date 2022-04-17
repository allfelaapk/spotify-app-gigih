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
