// returns the common values of two arrays
// uses Sets, could also use Object Literal

function intersection(nums1, nums2) {
  const nums1Set = new Set(nums1);
  const intersection = new Set(nums2.filter(num => nums1Set.has(num)));
  return [...intersection];
}

// if Set never existed
function intersectionNoSet(nums1, nums2) {
  const intersection = {};
  for (let num of nums1) {
    if(nums2.includes(num)) {
      intersection[num] = 1;
    }
  }
  return Object.keys(intersection).map(key => key);
}
