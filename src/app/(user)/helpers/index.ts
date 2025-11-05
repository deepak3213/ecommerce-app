export const getData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${url}`);
  }
  const data = await res.json();
  return (data.products ?? data) as T;
};
