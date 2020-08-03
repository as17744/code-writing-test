const insertSort = function (list) {    
    const len = list.length;
    for (let i = 1; i < len; i++) {
        let targetIndex = i;
        for (let j = i - 1; j >= 0; j--) {
            if (list[j] > list[targetIndex]) {
                const temp = list[targetIndex];
                list[targetIndex] = list[j];
                list[j] = temp;
                targetIndex = j;
            }
        }
    }
    return list;
}

const example = [9, 5, 44, 3, -1, 0, 1, 2, 6, 77, 89];

console.log(insertSort(example));
