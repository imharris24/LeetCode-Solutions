/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    const nodeMap = new Map();
    const childSet = new Set();

    // Step 1: Create all nodes (O(n))
    for (const [parent, child] of descriptions) {
        if (!nodeMap.has(parent)) {
            nodeMap.set(parent, new TreeNode(parent));
        }
        if (!nodeMap.has(child)) {
            nodeMap.set(child, new TreeNode(child));
        }

        childSet.add(child);
    }

    // Step 2: Assign children (O(n))
    for (const [parent, child, isLeft] of descriptions) {
        const parentNode = nodeMap.get(parent);
        const childNode = nodeMap.get(child);

        if (isLeft) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }
    }

    // Step 3: Find root (O(n))
    for (const [val, node] of nodeMap) {
        if (!childSet.has(val)) {
            return node;
        }
    }
};
