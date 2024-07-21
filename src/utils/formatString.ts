export interface Query {
  [key: string]: string | number;
}

/**
 * Converts a query object to a query string.
 * @param queryObj - The query object to convert.
 * @returns The query string representation of the query object.
 */
export function toQuery(queryObj?: Query) {
  if (!queryObj || !Object.keys(queryObj).length) return '';
  const queries: string[] = [];
  Object.keys(queryObj).forEach((key) => {
    if (queryObj[key]) {
      queries.push(`${key}=${queryObj[key]}`);
    }
  });
  return `?${queries.join('&')}`;
}
