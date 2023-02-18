import { Pharmacy } from "types/pharmacy";
import { Report } from "types/Report";
import { client } from "./client";

export const index = (query: string) => client.get<Array<Pharmacy>>(`pharmacies/?query=${query}`);

export const pharmacyImoprt = (formData: any) => client.post("pharmacies/pharmacy_import", formData);

export const pharmacyReportImoprt = (formData: any) => client.post("pharmacies/pharmacy_report_import", formData);

export const reportImoprt = (formData: any) => client.post("reports/report_import", formData);

export const show = (id: number) => client.get<Array<Report>>(`pharmacies/${id}`);
