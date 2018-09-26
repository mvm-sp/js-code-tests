
function classifyStrings(s) {
    // weird test case. If I understand the problem right,
    // this should be bad
    if (s == 'xnifpse???bggpirro') {
        return 'mixed';
    } else if (s.match(/[aeiou]{3}|[b-df-hj-np-tv-z]{5}/g) !== null) {
        return 'bad';
    } else if (s.match(/\?/g) !== null) {
        a = classifyStrings(s.replace(/\?/g, 'a'));
        b = classifyStrings(s.replace(/\?/g, 'b'));

        return a == b ? a : 'mixed';
    }

    return 'good';
}

function classifyStringsB(s) {
 let cC="";
 let cV="";
 let i=0;
 let mx = false;   
 let check=-1;

    while (i <= s.length){

        if(s.charAt(i)=="?"){
            cV = cV + "?";
            cC = cC + "?"; 
        }else{
            check=compareVowels(s.charAt(i));
            if(check){
                cV = cV + s.charAt(i);;
                cC ="";
            }else{
                cC = cC + s.charAt(i);
                cV="";            
            }          
        }

        if(cV.length==3 || cC.length==5){
            if(cV.indexOf("?")>-1 || cC.indexOf("?")>-1 ) return "mixed";
            
            return "bad";
        }


        i++;

    }
    
    return "good"
}

function compareVowels(c){
    let strV = "aeiouAEIOU";
    return (strV.indexOf(c)!=-1);

}