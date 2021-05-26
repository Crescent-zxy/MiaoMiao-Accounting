import { createId } from "lib/createId";
import { useState } from "react";

const defaultTags = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
];

const useTags = () => {
  const [tags, setTags] = useState<{ id: string; name: string }[]>(defaultTags);
  const findTag = (id: string) => tags.filter((tag) => tag.id === id)[0];
  const editTag = ({ id, name }: { id: string; name: string }) => {
    setTags(tags.map((tag) => (tag.id === id ? { id, name } : tag)));
  };
  const deleteTag = (id: string) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  return { tags, setTags, findTag, editTag, deleteTag };
};

export { useTags };
