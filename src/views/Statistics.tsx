import Layout from "components/Layout";
import { RecordItem, useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./money/CategorySection";

const CategoryWrapper = styled.div`
  background: white;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const Statistics: React.FC = () => {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  const hash: { [key: string]: RecordItem[] } = {};
  const selectedRecords = records.filter((i) => i.category === category);
  selectedRecords.forEach((r) => {
    const key = r.createTime;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const sortRecords = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        />
      </CategoryWrapper>
      {sortRecords.map(([date, records], index) => (
        <div key={date + index}>
          <Header>{date}</Header>
          <div>
            {records.map((r, index) => {
              return (
                <Item key={date + index}>
                  <div className="tags oneLine">
                    {r.tagIds.map((tagId) => (
                      <span key={tagId}>{getName(tagId)}</span>
                    ))}
                  </div>
                  {r.note && <div className="note">{r.note}</div>}
                  <div className="amount">￥{r.amount}</div>
                </Item>
              );
            })}
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Statistics;
