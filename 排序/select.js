const selectSort = function (list) {
    const len = list.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = list[i];
            list[i] = list[minIndex];
            list[minIndex] = temp;
        }
    }
    return list;
}

const example = [9, 5, 44, 3, -1, 0, 1, 2, 6, 77, 89];

console.log(selectSort(example));