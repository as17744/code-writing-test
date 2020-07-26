const findPath = function (node, target) {
    const res = [];
    const __findPath = function (node, target, path) {
        if (!node) {
            return;
        }
        path.push(node.val);
        if (!node.left && !node.right && node.val === target) {
            res.push(path);
        }
        __findPath(node.left, target - node.val, path);
        __findPath(node.right, target - node.val, path);
    };
    __findPath(node, target, []);
    return res;
}