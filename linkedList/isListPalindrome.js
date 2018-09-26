// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    if(!l) return true; 
       
       var node = l;
       var newArr = new Array();;
   
       while (node) { 
           newArr.push(node.value);
           node = node.next
       }    
       return newArr.join("") === newArr.reverse().join(""); 
   }
   