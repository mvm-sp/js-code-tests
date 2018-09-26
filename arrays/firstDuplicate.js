/*function firstDuplicate(a) {
    var dupA= a;
    var ret = -1;
    var pos = Math.pow(10,5);
    for(var x=0;x<a.length;x++){
        for(var y=x;y<dupA.length;y++){
            if(a[x]==dupA[y] && y>x && y<pos){
                ret=a[x]
                pos = y;
            }
        }
        
    }
    return ret;
}*/

function firstDuplicate(a) {
    var dups = new Set();
    for (var e of a) {
        let size = dups.size;
        dups.add(e); 
        if (size+1 !== dups.size) {

            return e;
        }
    } 
    
    return -1;
} 
