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
    <TagSection />
    <NoteSection />
    <CategorySection />
    <NumberPadSection />
  </MoneyLayout>
);

export default Money;
