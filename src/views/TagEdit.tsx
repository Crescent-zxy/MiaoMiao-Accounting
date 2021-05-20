import { useTags } from "hooks/useTags";
import { useParams } from "react-router";
type Params = {
  id: string;
};
const TagEdit: React.FC = () => {
  const { findTag } = useTags();
  let { id } = useParams<Params>();
  const tag = findTag(id);
  return <div>{tag.name}</div>;
};
export default TagEdit;
