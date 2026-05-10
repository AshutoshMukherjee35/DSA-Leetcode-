/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let ll1 = headA;
    let ll2 = headB;

    let seenNodes = new Set();

    while(ll2) {
        seenNodes.add(ll2);
        ll2 = ll2.next;
    }
    while(ll1) {
        if(seenNodes.has(ll1)) {
            return ll1
        }
        ll1 = ll1.next;
    }
    return null;
};