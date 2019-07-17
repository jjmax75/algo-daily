// inorder - left, root, right

function inorderTraversal(root) {
  const vals = [];
  function traverseTree(root) {
    if (root) {
      traverseTree(root.left);
      vals.push(root.val);
      traverseTree(root.right);
  	}
  }
  traverseTree(root);
  return(vals);
}

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var tree2 = new Node(5);
tree2.left = new Node(10);
tree2.left.left = new Node(17);
tree2.left.right = new Node(3);
tree2.right = new Node(8);

console.log(inorderTraversal(tree2));
