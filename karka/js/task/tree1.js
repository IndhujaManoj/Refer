// Create a binary tree using object representation
const tree = {
    value: 8,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null
      },
      right: {
        value: 6,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      }
    },
    right: {
      value: 10,
      left: null,
      right: {
        value: 14,
        left: {
          value: 13,
          left: null,
          right: null
        },
        right: null
      }
    }
  };
  
  // Example usage: perform an inorder traversal
  function inorderTraversal(node) {
    if (node !== null) {
      inorderTraversal(node.left);
      console.log(node.value);
      inorderTraversal(node.right);
    }
  }
  
  console.log('Inorder traversal:');
  inorderTraversal(tree);
  