// function isBadData() {
function isBadData(...args: any[]) {
    // Makes sure that data is non-empty arrays
  // const args = Array.prototype.slice.call(arguments);
  for (const arg of args) {
    if (!arg || !Array.isArray(arg) || !arg.length) {
      return true;
    }
  }
  
  return false;
}; 

export default isBadData;