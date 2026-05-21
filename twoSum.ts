function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i]!;
    if (map.has(need)) return [map.get(need)!, i];
    map.set(nums[i]!, i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // should print [0, 1]