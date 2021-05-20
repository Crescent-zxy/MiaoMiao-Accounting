import Layout from "components/Layout";
import { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./money/CategorySection";
import { NoteSection } from "./money/NoteSection";
import { NumberPadSection } from "./money/NumberPadSection";
import { TagSection } from "./money/TagSection";

const MoneyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = "-" | "+";

const Money: React.FC = () => {
  const [selected, setSelected] = useState({
    tagIds: [] as string[],
    note: "",
    category: "-" as Category,
    amount: "0",
  });
  const onSelectChange = (value: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...value,
    });
  };
  return (
    <MoneyLayout>
      <TagSection
        value={selected.tagIds}
        onChange={(tagIds) => {
          onSelectChange({ tagIds });
        }}
      />
      <NoteSection
        onChange={(note) => {
          onSelectChange({ note });
        }}
      />
      <CategorySection
        value={selected.category}
        onChange={(category) => {
          onSelectChange({ category });
        }}
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => {
          onSelectChange({ amount });
        }}
      />
    </MoneyLayout>
  );
};

export default Money;
