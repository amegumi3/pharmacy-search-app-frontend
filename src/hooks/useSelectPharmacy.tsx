import { useCallback, useContext } from "react";

import { PharmacyContext } from "providers/PharmacyProvider";
import { Pharmacy } from "types/pharmacy";

type Props = {
  id: number | undefined;
  pharmacies: Array<Pharmacy | null>;
};

export const useSelectPharmacy = () => {
  const { selectedPharmacy, setSelectedPharmacy } = useContext(PharmacyContext);

  const onSelectPharmacy = useCallback((props: Props) => {
    const { id, pharmacies } = props;
    const targetPharmacy = pharmacies.find((pharmacy) => pharmacy?.id === id);
    if (targetPharmacy !== null && targetPharmacy !== undefined) {
      setSelectedPharmacy(targetPharmacy);
    } else {
      console.log("見つかりませんでした");
    }
  },[setSelectedPharmacy]);
  return { selectedPharmacy, setSelectedPharmacy, onSelectPharmacy };
};
