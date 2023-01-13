import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sleep } from '../../helpers/sleep';

export interface IUser {
  name: string;
  picture?: string;
  email: string;
}
type Token = string | null | undefined;

interface AuthState {
  token: Token;
  user?: IUser;
  isLoading: boolean;
  auth: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isLoading: true,
  auth: false,
};

export const checkingAuthAction = createAsyncThunk(
  'AUTH/checkingAuth',
  async (token: Token) => {
    // TODO: fetch post auth
    await sleep(1);
    if (!token) {
      throw new Error();
    } else {
      const data = {
        token: Math.random().toString(36).slice(2),
        user: { name: 'Jose Fernando', email: 'jose@correo.com' },
      };
      return data;
    }
  }
);

export const loginAction = createAsyncThunk('AUTH/login', async () => {
  await sleep(1);
  const data = {
    token: Math.random().toString(36).slice(2),
    user: { name: 'Jose Fernando', email: 'jose@correo.com' },
  };
  return data;
});

export const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = undefined;
      state.user = undefined;
      state.auth = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkingAuthAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(checkingAuthAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.auth = true;
      localStorage.setItem('token', state.token);
    });
    builder.addCase(checkingAuthAction.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(loginAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.auth = true;
      localStorage.setItem('token', state.token);
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
