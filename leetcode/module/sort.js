/**
 * 排序类型
 * 空间复杂度 、 时间复杂度 、 稳定性
 * 
 */


const sort = {
  
  excute (type) {
    const arr = [5,12,3,5,7,8,9,0,-12,12];
    console.log(type, this[type](arr) || arr);
  },

  // 冒泡
  bubble (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  },

  // 快排
  quick (arr) {
    if (arr.length < 2) return arr;

    const [pivot, ...list] = arr; // 基数／划分left/right的数
    const left = list.filter(n => n <= pivot);
    const right = list.filter(n => n > pivot);

    return [
      ...this.quick(left),
      pivot,
      ...this.quick(right)
    ]
  },

  // 优化: 双指针
  quick2 (arr, left = 0, right = arr.length - 1) {
    if (left > right) return;

    let i = left;
    let j = right;
    let pivot = arr[left];

    while (i < j) {
      while (i < j && arr[j] >= pivot) j--;
      while (i < j && arr[i] <= pivot) i++;
      if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    arr[left] = arr[i];
    arr[i] = pivot;

    this.quick2(arr, left, i - 1);
    this.quick2(arr, i + 1, right);
  },

}

sort.excute('bubble')
sort.excute('quick')
sort.excute('quick2')

