/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*
// Recursive
var inorderTraversal = function (root) {
  let res = [];
  const helper = (root) => {
    if (root === null) {
      return [];
    }
    helper(root.left);
    res.push(root.val);
    helper(root.right);
  };
  helper(root);
  return res;
};
*/

// Iterative
var inorderTraversal = function (root) {
  if (root === null) {
    return [];
  }
  let res = [];
  let stack = [];
  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    if (stack.length == 0) {
      return res;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
};

// Test
const TreeNode = require("../structures/TreeNode");

const arr1 = [1, null, 2, 3];
const res1 = [1, 3, 2];

const arr2 = [];
const res2 = [];

const arr3 = [1];
const res3 = [1];

const arr4 = [1, 2];
const res4 = [2, 1];

const arr5 = [1, null, 2];
const res5 = [1, 2];

const arr = [arr1, arr2, arr3, arr4, arr5];
const res = [res1, res2, res3, res4, res5];

let i = 0;
while (i < arr.length) {
  let answer = inorderTraversal(TreeNode.from(arr[i]));
  console.log("Testcase " + i + ":");
  console.log("   Expected answer", res[i]);
  console.log("   Your answer:", answer);
  console.log("");
  i = i + 1;
}
