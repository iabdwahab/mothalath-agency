export const formatISOToDMY = (isoString: string): string => {
  const date = new Date(isoString);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  return formattedDate;
};
