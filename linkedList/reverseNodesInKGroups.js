// Definition for singly-linked list:
 //function ListNode(x) {
 //  this.value = x;
   //this.next = null;
 //}

 function reverseNodesInKGroups(l, k) {
    
    let result = [];
    
    const origK = k;
    let startIndex = 0;
  
    const populateResult = (node, k) => {
  
      if (node === null) {
  
        if (origK - k === 0) {
          return;
        }
  
        var remainder = result.splice(-origK);
        result = result.concat(remainder.reverse());
  
        while (result[result.length - 1] === undefined) {
          result.pop()
        }
  
        return;
      }
  
      result[startIndex + k - 1] = node.value;
  
      if (k === 1) {
        startIndex += origK;
        return populateResult(node.next, origK)
      }
  
      if (node !== null && node !== undefined) {
        return populateResult(node.next, k - 1);
      }
  
    }
  
    populateResult(l, k);
    
    return result;
  
  }
  
  const createList = (arr) => {
  
    function ListNode(x) {
      this.value = x;
      this.next = null;
    }
  
    var list = new ListNode(arr.shift());
  
    placeNode = (newNode, destinationNode) => {
      if (destinationNode.next === null) {
        destinationNode.next = newNode;
      } else {
        placeNode(newNode, destinationNode.next);
      }
    }
  
    createNode = () => {
      if (arr.length) {
        node = new ListNode(arr.shift());
        placeNode(node, list);
        createNode();
      }
      return;
    }
  
    createNode();
  
    return list;
  
  }
  
  
  /*
  var read= {str:0, qtd:0 };
  function reverseNodesInKGroups(l, k) {
      let r= listToNumberReverse(l,k,read);
      let aRet = [];
      let n1 = r.str.split(",");
      n1=n1.slice(0,n1.length-1);
      n1.forEach(toInt);
      //n1=n1.sort(compareNumbers);
      let iP = 1;
      let aTemp = [];
      for(let x = 0 ; x<n1.length; x++){
  
         aTemp.push(n1[x]); 
         if(iP< k){  
            iP++;  
         }else{
           console.log(aTemp);   
           aTemp.sort(orderCompare);  
           console.log(aTemp);   
           for(let y=0;y<aTemp.length;y++){
              aRet.push(aTemp[y]) ;
           }
           aTemp = [];  
           iP=1;  
         }
      }
      for(let x = 0 ; x<aTemp.length; x++){
          aRet.push(aTemp[x]) ;        
      }
  
      
      
      return aRet;
  }
  
  
  function orderCompare(a, b) {
    if (a < b ) {
      //console.log("a is less than b by some ordering criterion");  
      return 1;
    }
    if (a > b ) {
      //console.log("a is greater than b by the ordering criterion");  
      return -1;
    }
    // a must be equal to b
    return 0;
  }
  
  function compareNumbersReverse(a, b) {
    //return b - a;
    console.log(b - a)  ; 
    
  }
  
  function listToNumberReverse(l,k,read){
      let ret;
      if(l){
          ret = listToNumberReverse(l.next,k,read) 
          read.str = l.value + "," + ret.str; 
      }
      return read;
  }
  
  function toInt(element, index, array) {
      //element = parseInt(element,10);
      array[index] = parseInt(array[index],10);
  }
  
  */
  /*
  function listToNumberReads(l,k,read){
      let ret;
      if(l){
          ret = listToNumber(l.next,k,read) 
          if(l.value!=k){
            read.str = l.value + "," + ret.str;
          }else{
            read.qtd++;  
          }
      }
  
      return read;
  }
  
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
  function returnInt(element) {
    return parseInt(element, 10);
  }
  
  
  */