/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let newNode = new ListNode(0 , head);
    let first = newNode;
    for(let i = 0; i < n; i++) {
        first = first.next;
    }
    let second = newNode;
    while(first.next) {
        second = second.next;
        first = first.next;
    }
    second.next = second.next.next;
    return newNode.next
};