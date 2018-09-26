function composeRanges(nums) {
    let ret = [];
    let strTemp = "";
    let ini = nums[0];
    let end = 1
    nums.sort(compareNumbers);
    for(let x=1; x< nums.length; x++){
        if(nums[x-1] + 1 <  nums[x]){
            strTemp = ini.toString() 
            if(ini < nums[x-1])  strTemp = strTemp   + "->" + nums[x-1].toString();
            ret.push(strTemp);
            ini = nums[x];
            end = 0;
        }
        end++;
    }
    if(end==1 && nums.length > 0){
       ret.push(nums[nums.length-1].toString());  
        
    }else if(end > 1){
        strTemp = ini.toString() + "->" + nums[nums.length-1].toString();
        ret.push(strTemp);
    }
    return ret;
}




function compareNumbers(a, b) {
  return a - b;
}
