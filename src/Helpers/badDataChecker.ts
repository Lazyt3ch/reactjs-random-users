function isBadData(...args: any[]) {
    // Makes sure that data is non-empty arrays
  for (const arg of args) {
    if (!arg || !Array.isArray(arg) || !arg.length) {
      return true;
    }
  }
  
  return false;
}; 

export default isBadData;