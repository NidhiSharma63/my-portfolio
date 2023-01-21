export default function addSlug(string) {
  const value = string;
  return value.split(" ").join("-");
}
