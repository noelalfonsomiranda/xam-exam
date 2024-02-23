import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
  usersState: any;
  sessionState: any;
}

const initialState: IAuthState = {
  usersState: [],
  sessionState: {}
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsersState: (state, action: PayloadAction<any>) => {
      state.usersState = action.payload;
    },
    setSessionState: (state, action: PayloadAction<any>) => {
      state.sessionState = action.payload;
    },
  },
});

export const { setUsersState, setSessionState } = authSlice.actions;
export const authReducer = authSlice.reducer;