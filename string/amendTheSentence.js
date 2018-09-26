function amendTheSentence(s) {
    let ret = s.split("");
    for(let l = 1; l<ret.length; l++){
        if(ret[l]==ret[l].toUpperCase()){
            ret[l] = " " + ret[l];
        }
    }
    return ret.join("").toLowerCase();
}
