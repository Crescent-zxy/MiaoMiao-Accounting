import styled from "styled-components";
import React from "react";
import { useTags } from "hooks/useTags";

const Wrapper = styled.section`
  background-color: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background-color: red;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: string[];
  onChange: (selected: string[]) => void;
};

const TagSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags();
  const selectedTagIds = props.value;

  const toggleTag = (e: React.MouseEvent) => {
    const tag = e.target as HTMLLIElement;
    if (!tag.dataset.id) {
      return;
    }
    if (tag.tagName.toLowerCase() === "li") {
      const index = selectedTagIds.indexOf(tag.dataset.id);
      if (index >= 0) {
        // 已选中，复制没有选中的 tag，作为新的 selectedTag
        props.onChange(selectedTagIds.filter((t) => t !== tag.dataset.id));
      } else {
        props.onChange([...selectedTagIds, tag.dataset.id]);
      }
    }
  };
  return (
    <Wrapper>
      <ol onClick={toggleTag}>
        {tags.map((tag) => (
          <li
            key={tag.id}
            data-id={tag.id}
            className={selectedTagIds.indexOf(tag.id) >= 0 ? "selected" : ""}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export { TagSection };
