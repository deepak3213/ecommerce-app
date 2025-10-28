export const getData = async (endpoint: string) => {
  const res = await fetch(endpoint);
  const data = res.json();
  return data;
};
