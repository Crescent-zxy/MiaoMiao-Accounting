import styled from "styled-components";

const Wrapper = styled.section`
  /* display: flex;
  flex-direction: column; */
  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #e0e0e0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #c1c1c1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #b8b8b8;
      }
      &:nth-child(12) {
        background: #9a9a9a;
      }
      &:nth-child(14) {
        background: #a9a9a9;
      }
    }
  }
`;
type Props = {
  value: string;
  onChange: (value: string) => void;
  onOk?: () => void;
};
const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value;
  const setOutput = (output: string) => {
    if (output.length > 16) {
      props.onChange(output.slice(0, 16));
    } else {
      props.onChange(output);
    }
  };
  const numberButtonClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    switch (text) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (output === "0") {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case ".":
        if (output.indexOf(".") >= 0) {
          return;
        }
        setOutput(output + ".");
        break;
      case "OK":
        if (props.onOk) {
          props.onOk();
        }
        break;
      case "??????":
        setOutput("0");
        break;
      case "??????":
        if (output.length === 1) {
          setOutput("0");
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      default:
        break;
    }
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={numberButtonClick}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>??????</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>??????</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export { NumberPadSection };
