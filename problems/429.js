/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

// Recursive
var levelOrder = function (root) {
  let res = []
  const helper = (root, res, index) => {
    if (!root) {
      return
    }
    if (res[index]) {
      res[index].push(root.val)
    } else {
      res[index] = [root.val]
    }
    index = index + 1

    for (let i = 0; i < root.children.length; i++) {
      helper(root.children[i], res, index)
    }
  }
  helper(root, res, 0)

  return res
}

// Iterative
// var levelOrder = function (root) {
//   if (root === null) {
//     return []
//   }
//   if (root.children === null) {
//     return [root.val]
//   }
//   let res = []
//   let queue = []
//   queue.push(root)
//   while (queue.length !== 0) {
//     const result = []
//     queue.forEach(e => {
//       result.push(e.val)
//     })
//     res.push([...result])
//     const len = queue.length
//     for (let i = 0; i < len; i++) {
//       const node = queue.shift()
//       for (let j = 0; j < node.children.length; j++) {
//         queue.push(node.children[j])
//       }
//     }
//   }
//   return res
// }
