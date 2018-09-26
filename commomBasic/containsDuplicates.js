function containsDuplicates(a) {
    a.sort(compareNumbers);
    let ret = new Set();
    for(let i= 0 ; i< a.length; i++){
        ret.add(a[i]);
        if(ret.size < (i+1) ) return true;
        
    }
    return false;
    
    /*check = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
    })
    return check.length!=a.length;
    
    let ret = new Set();
    for(let i= 0 ; i< a.length; i++){
        ret.add(a[i]);
        console.log(ret.size);
        if(ret.size < (i+1) ) return true;
        
    }
    return false;

    //a.sort(compareNumbers);
    for(let i= 0 ; i< a.length; i++){
        if(a.lastIndexOf(a[i]) != i) return true;        
    }
    return false;
    
    */
}

function compareNumbers(a, b) {
  return a - b;
}