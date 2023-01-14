export default function addSlug(string) {
  const value =
    "What is the difference between the useCallback and useMemo hooks?";
  return value.split(" ").join("-");
}
