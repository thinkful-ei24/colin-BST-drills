const BST = require('./BST.js');

function bstHeight(tree) {
  if (!tree) {
    return 0;
  }
  let leftHeight = bstHeight(tree.left);
  let rightHeight = bstHeight(tree.right);
  if (leftHeight >= rightHeight) {
    return leftHeight + 1;
  } else {
    return rightHeight + 1;
  }
  //
}

function isBst(node, min=Number.NEGATIVE_INFINITY, max=Infinity) {
  if (node === null) {
    return true;
  }

  if (node.key < min || node.key > max) {
    return false;
  }
  return isBst(node.left, min, node.key) && isBst(node.right, node.key, max);
}

function thirdLargest(node) {
  //find the biggest value
  //check if biggest has a left value
  //  if it does, thats the second biggest value
  //    making biggest.parent the third largest
  //  if it doesn't, then the parent is the second biggest
  //    making biggest.parent.parent the third largest
}



function main() {
  let tree = new BST();

  tree.insert(8, 'some string');
  tree.insert(4, 'some other string');
  tree.insert(12, [1, 2, 3, 4, 5, 6, 5]);
  tree.insert(1, 1);
  tree.insert(6, 6);
  tree.insert(7, 7);
  tree.insert(20, 20);
  tree.insert(10, 10);
  //tree.remove(4);
  //console.log(tree);
  console.log(bstHeight(tree));
  console.log(isBst(tree));
  console.log(tree.find(12));
  console.log('NOISE !!!!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log(inorder(tree));
}

console.log(main());
