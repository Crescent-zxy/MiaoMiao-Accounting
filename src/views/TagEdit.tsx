import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import { Input } from "components/Input";
import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
import { useParams } from "react-router";
import styled from "styled-components";
type Params = {
  id: string;
};

const Topbar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background-color: white;
  > span {
    flex-grow: 1;
    text-align: center;
  }
`;

const InputWrapper = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 0 16px;
`;

const TagEdit: React.FC = () => {
  const { findTag } = useTags();
  let { id } = useParams<Params>();
  const tag = findTag(id);
  return (
    <Layout>
      <Topbar>
        <Icon name="left" />
        <span>编辑标签</span>
      </Topbar>
      <InputWrapper>
        <Input
          type="text"
          label="标签名"
          placeholder="请填写标签名"
          value={tag.name}
        />
      </InputWrapper>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};
export default TagEdit;
