import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, User } from '../../types';

const initialState: AppState = {
  users: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{ key: keyof AppState['filters']; value: string }>
    ) => {
      state.filters[action.payload.key] = action.payload.value;
    },
  },
});

export const { setUsers, setFilter } = appSlice.actions;
export default appSlice.reducer;
