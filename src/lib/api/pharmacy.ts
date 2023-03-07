import { Pharmacy } from "types/pharmacy";
import { Report } from "types/report";
import { client } from "./client";

export const index = (word: string, selectMenu: string) => client.get<Array<Pharmacy>>(`pharmacies/?word=${word}&state=${selectMenu}`);

export const pharmacyImport = (formData: any) => client.post("pharmacies/pharmacy_import", formData);

export const pharmacyReportImoprt = (formData: any) => client.post("pharmacies/pharmacy_report_import", formData);

export const reportImoprt = (formData: any) => client.post("reports/report_import", formData);

export const show = (id: any) => client.get<Array<Report>>(`pharmacies/${id}`);

export const destroyPharmacies = () => client.delete("pharmacies/destroy_all");

export const destroyReports = () => client.delete("reports/destroy_all");
