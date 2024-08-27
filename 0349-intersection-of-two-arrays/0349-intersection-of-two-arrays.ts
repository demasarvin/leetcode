function intersection(nums1: number[], nums2: number[]): number[] {
    const arr = nums1.filter(element => nums2.includes(element))
    const result = [... new Set(arr)]
    return result
};