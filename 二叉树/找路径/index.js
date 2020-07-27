const findPath = function (root, target) {
    if (!root) {
        return [];
    }
    const res = [];
    const __findPath = function(node, target, cur) {
        const curPath = [...cur, node.val];
        if (!node.left && !node.right && node.val === target) {
            res.push(curPath);
        }
        __findPath(node.left, target - node.val, curPath);
        __findPath(node.right, target - node.val, curPath);
    };
    __findPath(root, target, []);
    return res;
}