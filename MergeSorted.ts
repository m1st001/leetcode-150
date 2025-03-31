function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n == 0) return;

    nums1.splice(m);

    let i = 0;
    while (nums2.length > 0) {
        if (i >= nums1.length || nums2[0] < nums1[i]) {
            nums1.splice(i, 0, nums2.shift()!);
        }
        i++;
    }
};