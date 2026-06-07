/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let resultNode = l1;
    let prevNode = null;
    let currentNode = resultNode;
    let carry = 0;

    // traverse the second list
    for (i = l2; i != null; i = i.next) {
        // compute sum of two numbers
        currentNode.val += i.val + carry;
        if (carry == 1) {
            carry = 0;
        }

        // handle carry
        if (currentNode.val > 9) {
            carry = 1;
            currentNode.val = currentNode.val % 10;
        }

        // save & traverse to the next node
        prevNode = currentNode;

        if (i.next != null && currentNode.next != null) {
            currentNode = currentNode.next
            prevNode.next = currentNode;
        }

        else if (i.next != null && currentNode.next === null) {
            if (carry === 1) {
                currentNode = new ListNode(1, null);
                carry = 0;
            }
            else {
                currentNode = new ListNode(0, null);
            }
            prevNode.next = currentNode;
        }

    }

    for (i = currentNode.next; i != null; i = i.next) {
        if (carry != 0) {
            i.val += carry;
            carry = 0;
        }
        if (i.val > 9) {
            carry = 1;
            i.val = i.val % 10;
        }
        prevNode = i;
    }
    if (carry == 1) {
        prevNode.next = new ListNode(1, null);
    }
    return resultNode;
};
