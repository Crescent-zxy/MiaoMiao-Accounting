import Layout from "components/Layout";
import { useTags } from "hooks/useTags";

const Tags = () => {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <ol>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ol>
    </Layout>
  );
};

export default Tags;
