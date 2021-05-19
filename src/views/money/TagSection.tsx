import styled from "styled-components";
import React, { useState } from "react";

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

const TagSection: React.FunctionComponent = (props) => {
  const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const addTag = () => {
    const tagName = window.prompt("新标签的名称为");
    if (tagName) {
      setTags([...tags, tagName]);
    }
  };
  const toggleTag = (e: React.MouseEvent) => {
    const tag = e.target as HTMLLIElement;
    if (tag.textContent === null) {
      return;
    }
    if (tag.tagName.toLowerCase() === "li") {
      const index = selectedTags.indexOf(tag.textContent);
      if (index >= 0) {
        // 已选中，复制没有选中的 tag，作为新的 selectedTag
        setSelectedTags(selectedTags.filter((t) => t !== tag.textContent));
      } else {
        setSelectedTags([...selectedTags, tag.textContent]);
      }
    }
  };
  return (
    <Wrapper>
      <ol onClick={toggleTag}>
        {tags.map((tag) => (
          <li
            key={tag}
            className={selectedTags.indexOf(tag) >= 0 ? "selected" : ""}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export { TagSection };
