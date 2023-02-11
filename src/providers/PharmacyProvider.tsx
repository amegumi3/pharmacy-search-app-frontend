import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Pharmacy } from "types/pharmacy";

type PharmacyContextType = {
  pharmacies: Array<Pharmacy>;
  setPharmacies: Dispatch<SetStateAction<Array<Pharmacy>>>;
};

export const PharmacyContext = createContext<PharmacyContextType>({} as PharmacyContextType);

export const PharmacyProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [pharmacies, setPharmacies] = useState<Array<Pharmacy>>([]);

  return <PharmacyContext.Provider value={{ pharmacies, setPharmacies }}>{children}</PharmacyContext.Provider>;
};
