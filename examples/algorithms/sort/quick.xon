algorithm partition(A, low, high) is
    pivot := A[(low + high) / 2]
    i := low - 1
    j := high + 1
    loop forever
        do
            i := i + 1
        while A[i] < pivot

        do
            j := j - 1
        while A[j] > pivot

        if i >= j then
            return j

        swap A[i] with A[j]
===

partition: num[] nums, num low, num high
  var pivot = nums[(low + high) / 2]
  var i = low - 1
  var j = high + 1

  @:
    i++
    @ nums[i] < pivot: i++
    j--
    @ nums[j] > pivot: j--

    i >= j ? $ j
    nums[i] <=> nums[j]