import { useSelectPharmacy } from "hooks/useSelectPharmacy";
import { PharmacyContext } from "providers/PharmacyProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const DetailPharmacy = () => {
  const { pharmacies } = useContext(PharmacyContext);
  const { id } = useParams<{ id: any }>();

  console.log(id);
  const { onSelectPharmacy, selectedPharmacy } = useSelectPharmacy();
  onSelectPharmacy({ id, pharmacies });
  console.log(typeof selectedPharmacy);
  console.log(selectedPharmacy);

  return (
    <>
      <p> {selectedPharmacy?.name}</p>
      <p> {selectedPharmacy?.postalCode}</p>
      <p> {selectedPharmacy?.adress}</p>
    </>
  );
};
