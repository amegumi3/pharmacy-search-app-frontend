import { Flex, Input } from "@chakra-ui/react";
import { PrimaryButton } from "components/atoms/button/PrimaryButton";
import { memo, MouseEvent, VFC } from "react";

type Props = {
  value: string;
  onChange: any;
  submit: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  disabled?: boolean;
  placeholder: string;
};

export const SearchInput: VFC<Props> = memo((props) => {
  const { value, onChange, submit, disabled, placeholder } = props;
  return (
    <Flex>
      <Input value={value} onChange={onChange} placeholder={placeholder} p={4}/>
      <PrimaryButton submit={submit} disabled={disabled} bg="green.100">
        検索
      </PrimaryButton>
    </Flex>
  );
});
