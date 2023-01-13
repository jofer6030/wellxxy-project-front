import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './reducers/stepReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    Steps: stepReducer,
    Auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
