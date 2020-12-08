function isBadData() {
  const args = Array.prototype.slice.call(arguments);
  // console.log("args =", args);
  for (const arg in args) {
    if (!arg || !Array.isArray(arg) || !arg.length) {
      return true;
    }
  }
  
  return false;
}; 

export default isBadData;