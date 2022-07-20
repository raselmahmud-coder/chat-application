const arr = [3, 2, 2, 1, 2, 0, 4];
// const arr = [2,3,1,1,4]
// const arr = [3,2,1,0,4]
//  const arr =[2,0,2]
//  const arr =[1,0,1,0]
// const arr = [2, 1, 0, 1];
// const arr = [2, 5, 0, 0];
// const arr = [0];
// const arr = [0,1];

var canJump = function(nums) {
    const len = nums.length;  
  if (len === 1) return true;
    
  let steps = nums[0];  
  if (steps === 0) return false;
    
  for (let i = 1; i < len - 1; i++) {
    steps--;
    steps = Math.max(steps, nums[i]);
    if (steps === 0) return false;
  }
  return true;
    
 
};
console.log("my jump", canJump(arr));
