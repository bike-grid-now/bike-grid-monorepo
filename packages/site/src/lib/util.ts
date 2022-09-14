/**
 * Returns a page from an array
 *
 * @param from Array of paginated things
 * @param pageNum zero indexed page number
 * @param pageSize size of a page
 * @returns
 */
export const paginated = <A>(
  from: A[],
  pageNum: number,
  pageSize: number
): A[] => {
  const start = pageNum * pageSize;
  const end = start + pageSize;
  return from.slice(start, end);
};
