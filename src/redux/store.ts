import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './reducers/stepReducer';

const store = configureStore({
  reducer: {
    Steps: stepReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
