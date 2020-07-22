const reverse1 = function (head) {
    let pre = null;
    while (head) {
        const cur = new ListNode(head.val);
        cur.next = pre;
        pre = cur;
        head = head.next;
    }
    return pre;
}

const reverse2 = function(head) {
    if (head || head.next) { return head; }
    const next = head.next;
    const reverHead = reverse2(next);
    head.next = null;
    next.next = head;
    return reverHead;
}