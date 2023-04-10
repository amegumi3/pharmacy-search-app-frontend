import { VFC } from "react";
import { FaQuestionCircle } from "react-icons/fa";

type Props = {
  show: () => void;
};

export const QuestionButton: VFC<Props> = (props) => {
  const { show } = props;
  
  return (
    <button>
      <FaQuestionCircle onClick={show} size={12} />
    </button>
  );
};
