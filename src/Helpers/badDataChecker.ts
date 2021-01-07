function isNonEmptyArray(item: unknown): boolean {
  return (Array.isArray(item) && item.length > 0);
}

export default isNonEmptyArray;