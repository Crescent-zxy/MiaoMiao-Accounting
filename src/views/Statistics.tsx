import Layout from "components/Layout";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  > p {
    flex-grow: 3;
    border: solid 1px blue;
  }
  > div {
    flex-grow: 1;
  }
`;

const Statistics: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [n, setN] = useState<number>(10);
  useEffect(() => {
    if (n >= 0 && n < 10) {
      setTimeout(() => {
        setN(n - 1);
      }, 1000);
      console.log("n", n);
    } else {
      setDisabled(false);
      setN(10);
      console.log("nnn", n);
    }
  }, [n]);
  const count = () => {
    setDisabled(true);
    setN(n - 1);
  };
  return (
    <Layout>
      <button disabled={disabled} onClick={count}>
        {disabled ? n : "send"}
      </button>
      <Wrapper>
        <div>1</div>
        <div>1</div>
        <p>1</p>
        <div>1</div>
        <div>1</div>
      </Wrapper>
    </Layout>
  );
};

export default Statistics;
