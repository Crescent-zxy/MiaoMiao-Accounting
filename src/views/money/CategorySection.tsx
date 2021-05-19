import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const CategorySection: React.FC = () => {
  const [category, setCategory] = useState<string>("-");
  return (
    <Wrapper>
      <ul>
        <li
          className={category === "-" ? "selected" : ""}
          onClick={() => {
            setCategory("-");
          }}
        >
          支出
        </li>
        <li
          className={category === "+" ? "selected" : ""}
          onClick={() => {
            setCategory("+");
          }}
        >
          收入
        </li>
      </ul>
    </Wrapper>
  );
};

export { CategorySection };
