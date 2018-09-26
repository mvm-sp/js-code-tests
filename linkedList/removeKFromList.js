// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
//
function removeKFromList(l, k) {
    if (l) {
      l.next = removeKFromList(l.next, k);
      return l.value === k ? l.next : l;
    } else {
      return null;
    }
  }