function findDuplicates(arr: number[]): number[] {
  const seen = new Set<number>();// track of numbers already encountered
  const dupes = new Set<number>();// stores numbers that appears more than once
  for (const n of arr) {
    if (seen.has(n)) dupes.add(n);
    else seen.add(n);
  }
  return [...dupes];
}

console.log(findDuplicates([1,2,3,4,1,1,2,3,4,1]))