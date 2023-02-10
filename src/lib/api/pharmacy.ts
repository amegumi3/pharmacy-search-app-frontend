import { Pharmacy } from "types/pharmacy";
import client from "./client";

// export const searchPharmacy = (params: string) => client.post("pharmacies", {query: params});

export const searchPharmacy = (query: string) => client.get<Array<Pharmacy>>(`pharmacies/?query=${query}`);


