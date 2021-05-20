import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
type Props = {
  onChange: (value: string) => void;
};
const NoteSection: React.FC<Props> = (props) => {
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current) {
      props.onChange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          ref={refInput}
          placeholder="在这里添加备注"
          onBlur={onBlur}
        />
      </label>
    </Wrapper>
  );
};
export { NoteSection };
