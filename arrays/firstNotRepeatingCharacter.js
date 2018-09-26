function firstNotRepeatingCharacter(s) {
    
    var a = s.split("");
    
    for(var x = 0; x < a.length; x++){
        
        var chr = a[x];
        if( a.indexOf(chr) == a.lastIndexOf(chr)){
            return chr;
        }
        
    }
    
    return "_"
}
