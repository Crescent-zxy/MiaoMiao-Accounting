import { Input } from "components/Input";
import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 14px 16px;
  font-size: 14px;
`;
type Props = {
  value: string;
  onChange: (value: string) => void;
};
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input
        type="text"
        label="备注"
        value={note}
        placeholder="请填写备注"
        onChange={onChange}
      />
    </Wrapper>
  );
};
export { NoteSection };
