import Layout from "components/Layout";
import styled from "styled-components";
import { CategorySection } from "./money/CategorySection";
import { NoteSection } from "./money/NoteSection";
import { NumberPadSection } from "./money/NumberPadSection";
import { TagSection } from "./money/TagSection";

const MoneyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const Money = () => (
  <MoneyLayout>
    <TagSection>
      <ol>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>
      <button>新增标签</button>
    </TagSection>
    <NoteSection>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注" />
      </label>
    </NoteSection>
    <CategorySection>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </CategorySection>
    <NumberPadSection>
      <div className="output">100</div>
      <div className="pad clearfix">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </NumberPadSection>
  </MoneyLayout>
);

export default Money;
