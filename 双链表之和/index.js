var addTwoNumbers = function(l1, l2) {
    const node = new ListNode('head');
    let cur = node;
    let advance = 0;
    while(l1 || l2) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + advance;
        advance = sum >= 10 ? 1 : 0;
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (advance > 0) {
        cur.next = new ListNode(advance);
    }
    return node.next;
};