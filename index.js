function hasTargetSum(array, target) {
 
  for(let w = 0; w<array.length; w++){
   
    const complement = target-array[w];
 
    for(let t= w+1; t<array.length; t++){
   
      if(array[t] ===complement)return true;

   }
  }
   return false;
}
if (require.main === module) {
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}
  

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25))

  console.log("")
  console.log("Expecting: true")

  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10))

  console.log("")



module.exports = hasTargetSum;