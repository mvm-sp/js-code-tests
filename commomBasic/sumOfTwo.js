function sumOfTwo(a, b, v) {
    return sumOfTwoMap(a, b, v);
    // return sumOfTwoBinarySearch(a, b, v); // passes 19/20 tests
}

function sumOfTwoMap(a, b, v) {
    var i;
    var arr;
    var diff;
    var set

    map = {};
    if (a.length > b.length) {
        set = new Set(a);
        arr = b;
    } else {
        set = new Set(b);
        arr = a;
    }
    
    /*
    for(i = 0; i < a.length, a[i] <= v; i += 1) {
        map[a[i]] = true;
    }*/
    for(i = 0; i < arr.length; i += 1) {
        diff = v - arr[i];
        if (set.has(diff) === true) {
            return true;
        }
    }
    
    return false;
}



function sumOfTwoB(a, b, v) {
    return a.some( function( va) {
        return b.some( function(vb){
            return vb+va == v;
        });
      } 
    );
}


/*
  
   let fa = a.filter( function( value) {
        return value<=v;
    } );
    let fb = b.filter( function( value) {
        return value<=v;
    } );


    for(let nb of fb ){
        for(let na of fa){
            if(na+nb == v) return true;
        }
    }
    return false;
    
    //let ret = false; 
*/