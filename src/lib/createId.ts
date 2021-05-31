let id = parseInt(window.localStorage.getItem("id") || "0");
const createId = () => {
  id += 1;
  window.localStorage.setItem("id", JSON.stringify(id));
  return id.toString();
};
export { createId };
