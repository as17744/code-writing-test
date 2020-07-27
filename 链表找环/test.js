const hasCircle = function (head) {
    if (!head || !head.next) {
        return false;
    }
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