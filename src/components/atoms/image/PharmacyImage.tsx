import { Image } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  boxSize: string;
}

export const PharmacyImage: VFC<Props> = memo((props) => {
  const {boxSize} = props;
  return <Image src="https://3.bp.blogspot.com/-tkXn5gIOMSo/UV1JBZK5k8I/AAAAAAAAPRU/eq5Rs79XDGQ/s1600/yakkyoku.png" boxSize={boxSize} />;
});
