//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function hasPathWithGivenSum(t, s) {
    let node = t;
    if (node === null){
        return (s === 0);
    }
    
    if (node.left === null && node.right == null){
        return (s === node.value)
    }
    let currentSum = s - node.value;
    
    if (node.left && hasPathWithGivenSum(node.left, currentSum)){
        return true;
    }
    if (node.right && hasPathWithGivenSum(node.right, currentSum)){
        return true;
    }
    return false;
}