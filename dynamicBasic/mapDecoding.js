
function mapDecoding(message) {
    var length = message.length;
    var solutions = new Array (length + 1).fill(0);
    solutions[0] = 1;
    solutions[1] = 1;
    
    if (message.length === 1 && (parseInt(message, 10) <= 0 || parseInt(message, 10) > 26)) return 0;
    
    for (var i = 2; i < solutions.length; i++) {
      var currentNum = parseInt(message[i - 1], 10);
      var lastTwoNums = parseInt(message[i - 2] + message[i - 1], 10) || 0;
      //console.log(currentNum, lastTwoNums);
      
      if (!validateEncoding(lastTwoNums) && !validateEncoding(currentNum)) return 0;
      if (validateEncoding(currentNum)) solutions[i] += solutions[i - 1]
      if (validateEncoding(lastTwoNums) && message[i - 2] !== '0') solutions[i] += solutions[i - 2]
    }
    //console.log(solutions);
    return solutions[solutions.length - 1] % (Math.pow(10, 9) + 7);
  }
  
  
  function validateEncoding(n) {
    return (n <= 26 && n > 0);
  }
  
  
  
  function mapDecodingB(message) {
     let digits = message.split("");
     return countDecoding(digits,digits.length)  
  
  }
  
  function countDecoding(digits,n){ 
            
          // base cases 
          if ((n == 0 || n == 1))
          return  1;  //digits[n] =="0"? 0: 1; 
        
          // Initialize count 
          let count = 0;  
        
          // If the last digit is not 0, then  
          // last digit must add to 
          // the number of words 
          if (digits[n - 1] > "0") 
          count = countDecoding(digits, n - 1); 
        
          // If the last two digits form a number 
          // smaller than or equal to 26, then  
          // consider last two digits and recur 
          if (digits[n - 2] == "1" ||  
                      (digits[n - 2] == "2" &&  
                       digits[n - 1] < "7")) 
              count += countDecoding(digits, n - 2); 
        
          return count; 
  } 
  