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



function main() {
  let tree = new BST();

  tree.insert(8, 'cat');
  tree.insert(4, 'dog');
  tree.insert(12, 'frog');
  tree.insert(1, 'toad');
  tree.insert(6, 'leopard');
  tree.insert(7, 'giraffe');
  tree.insert(20, 'hippo');
  tree.insert(15, 'hippo');
  //tree.remove(4);
  console.log(tree);
  console.log(bstHeight(tree));

}

console.log(main());
