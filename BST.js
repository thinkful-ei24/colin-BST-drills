class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    //start at the root
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
    //if value is less than the root
    //  assign value to root.right
    //
  }

  remove(key) {
    if (this.key === key) {
      //checks to see if node has two children
      if (this.left && this.right) {
        const successor = this.right._findMin();
        //OR   const successor = this.left._findMax();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      //checks to see if node only has a left child
      else if(this.left) {
        this._replaceWith(this.left);
      }
      //checks to see if node has a right child
      else if(this.right) {
        this._replaceWith(this.right);
      }
      //if node has no children at all
      else {
        this._replaceWith(null);
      }
    }
    //Checks to see if the node is greater than or equal to
    //the current node, then checks to see if it has a child.
    //If it does, recursively call remove with the same key,
    //allowing "this" to move to the next node
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key not found');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      else if (this === this.parent.right) {
        this.parent.right = node;
      }
      //after replacing the node make the new node have the
      //same parent as the node it replaced
      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      //if node to be replaced is the root node
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  find(key) {
    if (key === this.key) {
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('key not found');
    }
  }
}

module.exports = BinarySearchTree;
