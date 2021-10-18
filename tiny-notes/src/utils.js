export const formatDate = (dateString) => {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    new Date(dateString)
  );
};
