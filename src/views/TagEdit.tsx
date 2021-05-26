import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import { Input } from "components/Input";
import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
import { useParams, useHistory } from "react-router";
import styled from "styled-components";
import React, { ChangeEventHandler } from "react";

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
  const { findTag, editTag, deleteTag } = useTags();
  let { id } = useParams<Params>();
  const tag = findTag(id);
  const history = useHistory();
  const onEdit: ChangeEventHandler<HTMLInputElement> = (e) => {
    editTag({ id, name: e.target.value });
  };
  const onDelete = () => {
    deleteTag(id);
    history.goBack();
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={goBack} />
        <span>编辑标签</span>
      </Topbar>
      <InputWrapper>
        <Input
          type="text"
          label="标签名"
          placeholder="请填写标签名"
          value={tag.name}
          onChange={onEdit}
        />
      </InputWrapper>
      <Center>
        <Button onClick={onDelete}>删除标签</Button>
      </Center>
    </Layout>
  );
};
export default TagEdit;
