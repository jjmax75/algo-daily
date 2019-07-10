// returns the common values of two arrays
// uses Sets, could also use Object Literal

function intersection(nums1, nums2) {
  const nums1Set = new Set(nums1);
  const intersection = new Set(nums2.filter(num => nums1Set.has(num)));
  return [...intersection];
}
