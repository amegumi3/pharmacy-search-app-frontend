import { PharmacyContext } from "providers/PharmacyProvider";
import {useContext } from "react";
import { Pharmacy } from "types/pharmacy";

type Props = {
  id: number;
  pharmacies: Array<Pharmacy>;
};

export const useSelectPharmacy = () => {
  const { selectedPharmacy, setSelectedPharmacy } = useContext(PharmacyContext);
  const onSelectPharmacy = (props: Props) => {
    const { id, pharmacies } = props;
    const targetPharmacy = pharmacies.find((pharmacy) => pharmacy.id === id);
    if (targetPharmacy !== null && targetPharmacy !== undefined) {
      setSelectedPharmacy(targetPharmacy);
    } else {
      console.log("見つかりませんでした");
    }
  };
  return { selectedPharmacy, setSelectedPharmacy, onSelectPharmacy };
};
