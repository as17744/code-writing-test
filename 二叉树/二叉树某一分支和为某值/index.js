const hasCertainValue = function (node, target) {
    if (!node) {
        return false;
    }
    if (!node.left && !node.right) {
        return node.val === target;
    }
    return hasCertainValue(node.left, target - node.val) || hasCertainValue(node.right, target - node.val);
}