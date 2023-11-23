import { RootState } from "../store";

export const selectIsLoggedIn = (state:RootState) => state.auth.isLoggedIn;
export const selectIsUpdating = (state:RootState) => state.auth.isUpdating;
export const selectUser = (state:RootState)=> state.auth.user;