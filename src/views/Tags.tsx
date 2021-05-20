import Layout from "components/Layout";
import Icon from "components/Icon";
import { useTags } from "hooks/useTags";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 16px;
  border: none;
  padding: 8px 12px;
  background: #767676;
  border-radius: 4px;
  color: white;
  margin-top: 50px;
`;
const Tags = () => {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={"/tags/" + tag.name}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
};

export default Tags;
