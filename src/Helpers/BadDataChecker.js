function isBadData() {
  // Makes sure that data is non-empty arrays
  const args = Array.prototype.slice.call(arguments);
  // console.log("args =", args);
  for (const arg of args) {
    if (!arg || !Array.isArray(arg) || !arg.length) {
      // console.log("BAD DATA: arg =", arg);
      return true;
    }
  }
  
  return false;
}; 

export default isBadData;