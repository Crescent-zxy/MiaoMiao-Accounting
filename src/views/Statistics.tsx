import Layout from "components/Layout";
import { useRecords } from "hooks/useRecords";
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

const Statistics: React.FC = () => {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        />
      </CategoryWrapper>
      <div>
        {records
          .filter((i) => i.category === category)
          ?.map((r, index) => {
            return (
              <Item key={index}>
                <div className="tags">
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
    </Layout>
  );
};

export default Statistics;
