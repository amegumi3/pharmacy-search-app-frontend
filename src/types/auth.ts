export type SignUpParams = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type SignInParams = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: string;
}