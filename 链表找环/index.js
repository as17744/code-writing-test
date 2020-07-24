// 打标签法
const hasCycle1 = function (head) {
    if (!head || !head.next) { return false };
    let res = false;
    while (head) {
        if (head.tag) {
            res = true;
            break;
        }
        head.tag = true;
        head = head.next;
    }
    return res;
}

// 快慢指针
const hasCycle2 = function (head) {
    if (!head || !head.next) { return false };
    let res = false;
    let fast = head.next;
    let slow = head;
    while (fast && slow) {
        if (fast === slow) {
            res = true;
            break;
        }
        fast = fast.next ? fast.next.next : fast.next;
        slow = slow.next;
    }
    return res;
}