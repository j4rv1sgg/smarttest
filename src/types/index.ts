export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface AppState {
  users: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}