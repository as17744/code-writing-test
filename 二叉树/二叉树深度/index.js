const maxDepth = function (node) {
    if (!node) {
        return 0;
    }
    if (!node.left && !node.right) {
        return 1;
    }
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}