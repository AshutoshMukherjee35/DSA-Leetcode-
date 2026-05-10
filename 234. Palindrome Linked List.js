/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //1. find the middle element
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //post this the slow pointer will have the middle element
    //2. reverse the second half of the list fom middle
    let prev = null;
    let curr = slow;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
// 1 -> 2 -> 3 -> *<-3 <- 2 <- 1
//*null
    //check for palindrom
    let fl = head;
    let sl = prev;
    while(sl) {
        if(fl.val !== sl.val) {
            return false;
        }
        fl = fl.next;
        sl = sl.next;
    }
    return true;
    
};