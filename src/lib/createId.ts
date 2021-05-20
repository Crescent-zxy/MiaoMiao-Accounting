let id = 0;
const createId = () => {
  id += 1;
  return id.toString();
};
export { createId };
