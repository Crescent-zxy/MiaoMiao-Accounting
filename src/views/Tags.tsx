import Layout from "components/Layout";
import Icon from "components/Icon";
import { useTags } from "hooks/useTags";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "components/Button";
import { Center } from "components/Center";

const TagList = styled.ol`
  font-size: 16px;
  background-color: white;
  > li {
    border-bottom: 1px solid #d5d5d5;
    margin: 0 16px;
    > a {
      padding: 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Tags = () => {
  const { tags, addTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={"/tags/" + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
};

export default Tags;
