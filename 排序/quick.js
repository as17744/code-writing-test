const quickSort = function (list) {
    debugger;
    const start = 0;
    const end = list.length - 1;
    const partition = function (data, left, right) {
        if (left >= right) return;
        const pivot = data[left];
        let l = left;
        let r = right;
        while (r > l) {
            while (r > l && data[r] > pivot) {
                r--;
            }
            if (r > l)  {
                data[l] = data[r];
                l++;
            }
            while (r > l && data[l] < pivot) {
                l++;
            }
            if (r > l) {
                data[r] = data[l];
                r--;
            }
        }
        // r === l
        data[r] = pivot;
        partition(data, left, r - 1);
        partition(data, l + 1, right);
    };
    partition(list, start, end);
    return list;
}

const example = [9, 5, 44, 3, -1, 0, 1, 2, 6, 77, 89];
console.log(quickSort(example));