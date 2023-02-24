import { VFC } from "react";
import { FaInfoCircle} from "react-icons/fa";

type Props = {
  show: () => void;
};

export const InfoButton: VFC<Props> = (props) => {
  const { show } = props;
  return (
    <button>
      <FaInfoCircle onClick={show} size={12} />
    </button>
  );
};
