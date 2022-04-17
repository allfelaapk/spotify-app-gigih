<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
=======
import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60

export default configureStore({
  reducer: {
    auth: reducer,
  },
});
