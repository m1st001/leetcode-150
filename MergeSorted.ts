function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n == 0) return;
    if (m == 0) {
        nums1.push(...nums2);
        return;
    }
};