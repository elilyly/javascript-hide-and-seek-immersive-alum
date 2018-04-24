// // function deepestChild(){

// // const lis = document.getElementById('grand-node').querySelectorAll('div');

// //   return lis[lis.length-1];
// // }

// // function deepestChild(){
// // const lis = document.getElementById('grand-node').querySelectorAll('div');
// //   return lis[lis.length-1];
// // }

// function deepestChild() {
//   let node = document.querySelector('#grand-node')
//   let nextNode = node.childNodes

//   while (nextNode) {
//     node = node.childNodes
//   }

//   return node
// }




// function deepestChild() {
//   let node = document.getElementById('grand-node');
//   let innerNode = node.childNodes[1]
  
//   for(var i = 0; i < innerNode.length; i++) {
//     if(node === innerNode[1]) {
//       return node;
//     } else{
//       return innerNode
//     }
//   }    
// }
 
 
 function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  
  return nodes[nodes.length-1];
}

// function deepestChild() {
// const lis = document.getElementById('grand-node').querySelectorAll('div');
// var nli = lis.childNodes;
//   while(nlis) {
//     f = 
    
//   }
//   return f
// }


// function deepestChild() {
// var f = document.querySelector('#grand-node')
// var nextF = f.firstChild;
//   while(nextF) {
//     nextF /= f.firstChild
//   }
//   return f
// }
// const lis = document.getElementById('grand-node').querySelectorAll('div');


// function deepestChild(){
// const grand = document.getElementById('grand-node').querySelectorAll('div')
// const l = grand[grand.length - 1]
// return l
// }


// function deepestChild() {
//   var f = document.getElementById('grand-node').querySelectorAll('div')
//   var deepF = f.firstChild[0]
//   while(deepF) {
//     f = deepF.firstChild[0]
//     deepF= f
//   }
//   return f
// }




// function deepestChild() {
//   var f = document.getElementById('grand-node').querySelectorAll('div')
//   var deepChild = [f.length - 1]
//   return f[deepChild]
// }

// are there any nodes at all? If no, return the initial node
// if there are, then we will assign all child nodes to a new array
// and we will check each child node, and say: does this node have a child node? If yes, put these child nodes to the end of our second array. if no, delete this
// end condition is when there is only 1 element left in the array


// function deepestChild() {
//     var f = document.getElementById('grand-node').querySelectorAll('div');
//     var deepChild = node.childNodes;
//     while(deepChild) {
      
//     }
// }
// }