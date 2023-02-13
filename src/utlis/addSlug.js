export default function addSlug(string) {
  const value = string;
  if (!value) return;
  return value?.split(" ").join("-");
}
