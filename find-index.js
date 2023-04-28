function findIndex(nums, position = 0) {
  if (nums.length === position) {
    return -1;
  }
  
  if (nums[position] === position) {
    return position;
  }
  
  return findIndex(nums, position + 1);
}

const nums = [5,3,2,1,0];
const result = findIndex(nums)
const msg = result >= 0 ? `El ${result} coincide con su indice` : "Ningún número coincide con su indice"
console.log(msg)