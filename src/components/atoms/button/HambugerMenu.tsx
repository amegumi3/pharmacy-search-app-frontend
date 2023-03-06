import { VFC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  show: () => void;
};

export const HambugerMenu: VFC<Props> = (props) => {
  const { show } = props;
  
  return (
    <button>
      <GiHamburgerMenu onClick={show} size={17} />
    </button>
  );
};
