import Layout from "components/Layout";
import { useRecords } from "hooks/useRecords";
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

const defaultData = {
  tagIds: [] as string[],
  note: "",
  category: "-" as Category,
  amount: "0",
};

const Money: React.FC = () => {
  const [selected, setSelected] = useState(defaultData);
  const { addRecord } = useRecords();
  const onSelectChange = (value: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...value,
    });
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert("保存成功！");
      setSelected(defaultData);
    }
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
        value={selected.note}
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
        onOk={submit}
      />
    </MoneyLayout>
  );
};

export default Money;
