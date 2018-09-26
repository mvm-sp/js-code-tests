// Definition for singly-linked list:
//
function addTwoHugeNumbers(a, b) {
    let objA = getObjectParse(a);
    let objB = getObjectParse(b);
    let max = Math.max(objA.itens,objB.itens);
    

    objA.number = "0000,".repeat(max).substring(0, (max*4)+(max-1) - objA.number.length) + objA.number;
    objB.number = "0000,".repeat(max).substring(0, (max*4)+(max-1) - objB.number.length) + objB.number;
    let arrA = objA.number.split(",");
    let arrB = objB.number.split(",");
    console.log("arrA",arrA.length);
    console.log("arrB",arrB.length);
/*    
    var ret = new ListNode(parseInt(arrA[0])+parseInt(arrB[0]));
    for(let x=1; x<arrA.length;x++){
       ret.add(parseInt(arrA[x])+parseInt(arrB[x])) 
       
    }
*/
    var ret = [];
    let remains = 0
    for(let x=arrA.length-1; x>=0;x--){
       let value = parseInt(arrA[x])+parseInt(arrB[x])+remains;
       if(value>9999){
           //ajustArray(ret,x)
           value = value - 10000;
           remains = 1;
       }else{
           remains = 0;
       }
       //ret.push(value); 
       ret.unshift(value);  
    }
    //ret = { value: 9876, next: {value: 5434, next: {value: 0000, next: null }}};
    //ret = [9876, 5434, 0000];
    if(remains>0){
       ret.unshift(remains);   
    }
    return ret;
    
}

function ajustArray(arr,pos){
    arr[pos] = arr[pos] - 10000;
    pos--    
    if(pos<0){
      arr.unshift(0)   
      pos=0;  
    } 
    arr[pos] = arr[pos]+1;
    if(arr[pos] > 9999){
       ajustArray(arr,pos); 
    }
}

class ListNode{
    
    constructor(value) {
       	// Create a new node
		let newNode = new Node(value); 
        this.currentNode = newNode;
    }
    
    	add(value) {

		let currentNode = this.currentNode;

		let newNode = new Node(value);

		while( currentNode.next ) {
			currentNode = currentNode.next;
		}
		currentNode.next = newNode;

		return newNode;
	}
    
}

 function Node(x) {
   this.value = x;
   this.next = null;
 }

function getObjectParse(l){
    if(!l) return 0;
    let node=l;
    let newArr = [];
    let itens = 0;
    let ret = {itens:0,
               number:0};
    while (node) { 
        //console.log("  formated = " + "0000".substring(0, 4 - node.value.toString().length)+ node.value.toString());
        newArr.push( "0000".substring(0, 4 - node.value.toString().length) + node.value.toString());
        node = node.next
        itens++
    }  
    
    //console.log("0".repeat(4*itens).substring(0, (4*itens) - newArr.join("").length) + newArr.join(""));
    ret.itens = itens;
    ret.number = newArr.join(",");
    
    return ret;
}