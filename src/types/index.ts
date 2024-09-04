export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export type FilterKeys = keyof Omit<User, 'id'>;

export type Filters = {
  [key in FilterKeys]: string;
};

export interface AppState {
  users: User[];
  filters: Filters;
}
