function find_min(nums) {
    let min_num = Number.INFINITY; // bigger than all other numbers
    for (let num of nums) {
      if (num < min_num) {
        min_num = num
      }
    }
    return min_num;
  }