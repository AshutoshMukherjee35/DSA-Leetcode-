function Node(val, next) {
    this.val = val;
    this.next = next;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) {
        return -1;
    }
    let curr = this.head;
    for(let i = 0; i < index; i++) {
        curr = curr.next;
    }

    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val, null);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;

    return this.head;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val, null);
    if(!this.head) {
        this.head = newNode;
    } else {
    let curr = this.head;
    while(curr && curr.next) {
        curr = curr.next;
    }
    curr.next = newNode;
    }
    this.size++;

    return this.head;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index > this.size) return -1;
    if(index === 0) {
        this.addAtHead(val);
    } else if(index === this.size) {
        this.addAtTail(val);
    } else {
    let curr = this.head
    for(let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    let newNode = new Node(val, null);
    newNode.next = curr.next;
    curr.next = newNode;
     this.size++;
    }

   
    return this.head;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) {
        return -1;
    }

    if(index === 0) {
        this.head = this.head.next;
        this.size--;
        return this.head;
    }
    
    let curr = this.head;
    for(let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
    this.size--;

    return this.head;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */