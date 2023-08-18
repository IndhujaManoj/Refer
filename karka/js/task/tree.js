// Define the structure of a binary tree node
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Binary tree class
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a new node into the binary tree
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        // If the tree is empty, set the new node as the root
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper method to recursively insert a node into the binary tree
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        // If the new node value is less than the current node value, go left
        if (node.left === null) {
          // If the left child is null, insert the new node here
          node.left = newNode;
        } else {
          // Recursively insert into the left subtree
          this.insertNode(node.left, newNode);
        }
      } else {
        // If the new node value is greater than or equal to the current node value, go right
        if (node.right === null) {
          // If the right child is null, insert the new node here
          node.right = newNode;
        } else {
          // Recursively insert into the right subtree
          this.insertNode(node.right, newNode);
        }
      }
    }
    
    // Perform an inorder traversal of the binary tree
    inorderTraversal(node = this.root) {
      if (node !== null) {
        this.inorderTraversal(node.left);
        console.log(node.value);
        this.inorderTraversal(node.right);
      }
    }
  }
  
  // Usage example
  const tree = new BinaryTree();
  tree.insert(8);
  tree.insert(3);
  tree.insert(10);
  tree.insert(1);
  tree.insert(6);
  tree.insert(14);
  tree.insert(4);
  tree.insert(7);
  tree.insert(13);
  
  // Perform an inorder traversal of the binary tree
  console.log('Inorder traversal:');
  tree.inorderTraversal();
  