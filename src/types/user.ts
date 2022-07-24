export type user = {
  id: string;
  email: string;
  password: string;
  access_token?: string;
  role?: '';
};

export type userComplete = {
  username?: string;
  address?: string;
  phone?: string;
  email?: string;
  password?: string;
  role?: '';
};

export type userStore = {
  user: user | null;
  isLogged: boolean;
};
