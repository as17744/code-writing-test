const findPath = function (root, sum) {
    if (!root) {
        return [];
    }
    let res = [];
    const __findSum = function (node, target, cur) {
        if (!node) {
            return;
        }
        const curPath = [...cur, node.val];
        if (!node.left && !node.right && node.val === target) {
            res.push(curPath);
        }
        __findSum(node.left, target - node.val, curPath);
        __findSum(node.right, target - node.val, curPath);
    }
    __findSum(root, sum, []);
    return res;
}