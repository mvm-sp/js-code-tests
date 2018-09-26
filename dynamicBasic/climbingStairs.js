function climbingStairs(n) {
    
    let possib=[];
    let ret = hasMoreWays(n, possib);
    //let ret = sumOcurrs(n, 0);
    //console.log("possibilites " + possib.toString()) ; 
    return ret;
}



function sumOcurrs(n, curLevel) {   
  //console.log("starting with n = " + n + " and curLevel = " + curLevel) ;   
  if (n <= 1){
     return 1;  
  }    
  if (curLevel==n){    
    return curLevel;
  } 
  curLevel = sumOcurrs(n - 1, curLevel) + sumOcurrs( n - 2, curLevel);   
  return curLevel;  
    
}

function hasMoreWays(n, arrLev) {   
  //console.log("starting with n = " + n + " and curLevel = " + arrLev.length) ;     
  if (n <= 1){
    return 1;  
  }
  if (arrLev[n]){   
    return arrLev[n];
  } 
  arrLev[n] = hasMoreWays(n - 1, arrLev) + hasMoreWays(n - 2, arrLev);   
  return arrLev[n];  
    
}
