// function isBadData(...args: any[]) {
//     // Makes sure that data is non-empty arrays
//   for (const arg of args) {
//     if (!arg || !Array.isArray(arg) || !arg.length) {
//       return true;
//     }
//   }
  
//   return false;
// }; 

function isNonEmptyArray(item: unknown): boolean {
  return (Array.isArray(item) && item.length > 0);
}

// export default isBadData;
export default isNonEmptyArray;