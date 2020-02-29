function getSecondLargest(nums) {
    var max1st = nums[0];
    var max2nd = 0;

  for(var i=0; i<nums.length; i++) {

    if(nums[i] > max1st) {

      max2nd = max1st;

      max1st = nums[i];

    }

    else if(nums[i] > max2nd && nums[i] !== max1st) {

      max2nd = nums[i];

    }

  }

  return max2nd;

}