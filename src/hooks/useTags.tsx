import { createId } from "lib/createId";
import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<{ id: string; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: "衣" },
        { id: createId(), name: "食" },
        { id: createId(), name: "住" },
        { id: createId(), name: "行" },
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, tags);
  const findTag = (id: string) => tags.filter((tag) => tag.id === id)[0];
  const editTag = ({ id, name }: { id: string; name: string }) => {
    setTags(tags.map((tag) => (tag.id === id ? { id, name } : tag)));
  };
  const deleteTag = (id: string) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt("新标签的名称为");
    if (tagName) {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };
  const getName = (id: string) =>
    tags.filter((t) => t.id === id)[0]?.name || "";
  return { tags, setTags, findTag, editTag, deleteTag, addTag, getName };
};

export { useTags };
