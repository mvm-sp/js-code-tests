function houseRobber(nums) {
    let haveMoneyFirst= 0;
    let haveMoneySecond = 0;
    //haveMoneyFirst =  chooseHouse(nums, 0 , 0 ) ;
    //haveMoneySecond =  chooseHouse(nums, 1 , 0 ) ;
    
    return catchMoney(nums) ; 
    //return Math.max(haveMoneyFirst,haveMoneySecond) ;
  }
  
  
  function catchMoney(nums) {
      var arrSum = new Array();
      let ret = 0
      ret = checkHowLarge(nums);
      if(ret==-1){
          arrSum.push(nums[0]);
  
          arrSum.push(Math.max(nums[0],nums[1]));
  
          for(var x = 2 ; x < nums.length ; x++){
  
              arrSum[x] =  Math.max(nums[x] + arrSum[x-2] , arrSum[x-1])
              console.log(arrSum)
          }
          ret = arrSum[arrSum.length-1]; 
          
      }
      return ret;
  };
  
  
  function checkHowLarge(nums){
      let ret = -1
      if(nums.length == 0){
        ret = 0;  
      } 
      if(nums.length == 1){
        ret = nums[0];  
      } 
      if(nums.length == 2){
        ret = Math.max(nums[1],nums[0]);
      } 
   
      return ret;
      
  }
  /*
  function chooseHouse(nums, current , result ) {
    if(current >= nums.length){
     return result; 
    } 
    if(result + nums[current]){
      current++;
    }
    result += nums[current] ;
    return chooseHouse(nums,current, result);
  };
  */
  