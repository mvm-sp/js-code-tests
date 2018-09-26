// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    let n1= listToNumberReverse(l1).split(",");
    let n2 = listToNumberReverse(l2).split(",");
    n1 = n1.slice(1,n1.length);
    n2 = n2.slice(1,n2.length);
    let ret = [];
    ret = n1.concat(n2);
    //ret.forEach(toInt);
    for(let x = 0 ; x<ret.length; x++){
       ret[x] = parseInt(ret[x]);
    }
    
    ret.sort(compareNumbers);
    return ret;
}

function compareNumbers(a, b) {
  return a - b;
}

function listToNumberReverse(l){
    let ret= "";
    if(l){
         ret =  listToNumberReverse(l.next) + "," + l.value 
    }

    return ret;
}

/*
function returnInt(element) {
  return parseInt(element, 10);
}

function toInt(element, index, array) {
    element = parseInt(element,10);
    console.log("a[" + index + "] = " + element);
}
*/