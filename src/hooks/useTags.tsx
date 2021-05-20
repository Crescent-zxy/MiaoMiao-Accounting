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
  return { tags, setTags };
};

export { useTags };
