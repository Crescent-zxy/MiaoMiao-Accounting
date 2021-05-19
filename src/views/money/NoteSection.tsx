import React, { useRef, useState } from "react";
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

const NoteSection: React.FC = () => {
  const [, setNote] = useState<string>("");
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current) {
      setNote(refInput.current.value);
      console.log(refInput.current.value);
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
