import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Pharmacy } from "types/pharmacy";

type PharmacyContextType = {
  pharmacies: Array<Pharmacy>;
  setPharmacies: Dispatch<SetStateAction<Array<Pharmacy>>>;
  selectedPharmacy: Pharmacy | null;
  setSelectedPharmacy: Dispatch<SetStateAction<Pharmacy | null>>;
};

export const PharmacyContext = createContext<PharmacyContextType>({} as PharmacyContextType);

export const PharmacyProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [pharmacies, setPharmacies] = useState<Array<Pharmacy>>([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(null);
  
  return <PharmacyContext.Provider value={{ pharmacies, setPharmacies, selectedPharmacy, setSelectedPharmacy }}>{children}</PharmacyContext.Provider>;
};
