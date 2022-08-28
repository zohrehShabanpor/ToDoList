import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  username: string | undefined;
}

const initialState: IUserState = {
  username: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<{ username: string }>) => {
      state.username = action.payload.username;
    },
  },
});
