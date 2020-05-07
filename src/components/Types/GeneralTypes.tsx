export interface Authorization {
  isAuth: boolean;
  firstname?: string;
  lastname?: string;
  token?: string;
  space?: string;
}

export interface Profile {
  theme: string;
  space: string;
}

export interface Message {
  name: string;
  signal: boolean;
  data?: any;
}
