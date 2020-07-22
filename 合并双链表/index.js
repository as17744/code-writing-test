const mergList = function (l1, l2) {
    const node = new ListNode('head');
    let cur = node;
    while (l1 || l2) {
        if (!l1) {
            cur.next = new ListNode(l2.val);
            l2 = l2.next;
        } else if (!l2) {
            cur.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            if (l1.val < l2.val) {
                cur.next = new ListNode(l1.val);
                l1 = l1.next;
            } else {
                cur.next = new ListNode(l2.val);
                l2 = l2.next;
            }
        }
        cur = cur.next;
    }
    return node.next;
}