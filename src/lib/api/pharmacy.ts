import { Pharmacy } from "types/pharmacy";
import { Report } from "types/Report";
import client from "./client";

export const index = (query: string) => client.get<Array<Pharmacy>>(`pharmacies/?query=${query}`);

export const show = (id: number) => client.get<Array<Report>>(`pharmacies/${id}`);