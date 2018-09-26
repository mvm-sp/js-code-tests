//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }



function isTreeSymmetric(t) {
    let ret;
    if(t){
        let arrContr = [t.value];
        //let arrRet = getSymmetricArray(t,arrContr);
        //console.log(arrRet);
        //console.log(arrRet.reverse());
        //return (arrRet.toString() == arrRet.reverse().toString());
        
        return isNodeSymmetric(t,arrContr);

    }else{
        return true;
    }
    
}



function isNodeSymmetric(t,arrC){
    
    let tr;
    let tl;
    let right ;
    let left ;
    tr=t.right;
    tl=t.left
    tr? arrC.push(tr.value) : arrC.push("x")  ;
    tl? arrC.unshift(tl.value) : arrC.push("x")  ;    
 
    console.log(" arrC = " + (arrC) );
    console.log(" arrC[0] = " + (arrC[0]) );
    console.log(" arrC[arrC.length- 1] = " + (arrC[arrC.length-1]) );    

    if(arrC[0] != arrC[arrC.length-1]) return false;

    

    if(tl && tr){
        
      right = tr.right;
      left = tr.left;
      left ? arrC.push(left.value) : arrC.push("x")  ;        
      right ? arrC.push(right.value) : arrC.push("x") ;
      tr = tr.right;
        
      right = tl.right
      left = tl.left 
      right ? arrC.unshift(right.value) : arrC.unshift("x") ; 
      left ?  arrC.unshift(left.value) :  arrC.unshift("x") ;
      tl = tl.left;
      
      console.log(" arrC = " + (arrC) );
      console.log(" arrC[0] = " + (arrC[0]) );
      console.log(" arrC[arrC.length- 1] = " + (arrC[arrC.length-1]) );    
        
      if(arrC[0] != arrC[arrC.length-1]) return false;
      
        
    }

    return true;
}


/*
function getSymmetricArray(t,arrC){
    let arrTempR=[];
    let arrTempL=[];
    let tr;
    let tl;
    let right ;
    let left ;
    tr=t.right;
    tl=t.left
    tr? arrC.push(tr.value) : arrC.push("x")  ;
    tl? arrC.unshift(tl.value) : arrC.push("x")  ;    



    while(tr){
      arrTempR=[];
      right = tr.right;
      left = tr.left;
      left ? arrC.push(left.value) : arrC.push("x")  ;        
      right ? arrC.push(right.value) : arrC.push("x") ;
      tr = tr.right;
    }


    while(tl){
      arrTempL=[];  
      right = tl.right
      left = tl.left 
      right ? arrC.unshift(right.value) : arrC.unshift("x") ; 
      left ?  arrC.unshift(left.value) :  arrC.unshift("x") ;
      tl = tl.left;
 
    }

    return arrC;
}

*/

/*function isNodeSymmetric(t,arrC,direct){
    let right = t.right;
    let left = t.left;
    let arrTempR=[];
    let arrTempL=[];
    if(right){
       arrC.push(right.value) ;
    }
    if(left){
       arrC.unshift(left.value) ;
    }
    if(t.right ){
        arrTempR = isNodeSymmetric(t.right,arrTempR,"right")
    }
    if(t.left ){
        arrTempL =isNodeSymmetric(t.left,arrTempR,"left")
    }
     
    return arrC;    

    
}*/