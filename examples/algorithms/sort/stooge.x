 algorithm stoogesort(array L, i = 0, j = length(L)-1)
     if L[j] < L[i] then
         L[i] ↔ L[j]
     if j - i > 1 then
         t = (j - i + 1)/3
         stoogesort(L, i  , j-t)
         stoogesort(L, i+t, j  )
         stoogesort(L, i  , j-t)
     return L

sort: num[] nums, num i = 0, num j = -1
    j < 0 ? j = nums.length - 1
    nums[j] < nums[i] ? nums[i] <=> nums[j]
    j - i > 1 ?
        t = (j - i + 1) / 3
        sort(nums, i, j-t)
        sort(nums, i+t, j-t)
        sort(nums, i, j-t)
    $ nums