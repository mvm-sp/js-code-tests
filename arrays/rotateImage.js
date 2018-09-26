function rotateImage(a) {
    let newArr = new Array();
    for(let rt=0;rt < a[0].length;rt++){ 
      let tempArr = new Array();
      //console.log("current line position:" + rt);
      //console.log("Original line :" + a[rt]);  
      for(let i = a.length -1; i >= 0; i--){
        //console.log("add current item from position["+ i + "," + rt + "]" + " : " + a[i][rt]);
        tempArr.push(a[i][rt]);
        //console.log("new line : " + tempArr);
       }
      newArr.push(tempArr)
    }
    return newArr
  }
  