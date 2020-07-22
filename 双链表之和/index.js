const sum = function (l1, l2) {
    const node = new ListNode('head');
    let cur = node;
    let advance = 0;
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + advance;
        cur.next = new ListNode(sum % 10);
        advance = Math.floor(sum / 10);
        cur = cur.next;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    if (advance) {
        cur.next = new ListNode(advance);
    }
    return node.next;
}