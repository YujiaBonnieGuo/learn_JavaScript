/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max=nums[0];
  var sum=0;
  nums.forEach(function(e,i){
      sum+=e;
      console.log(max)
      if(sum>max){max=sum}
      if(sum<0){sum=0}
  })
  return max
};