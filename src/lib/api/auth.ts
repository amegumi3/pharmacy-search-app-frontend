import { SignUpParams, SignInParams } from "types/api";
import client from "./client";

export const signUp = (params: SignUpParams) => client.post("auth", params);

export const signIn = (params: SignInParams) => client.post("auth/sign_in", params)