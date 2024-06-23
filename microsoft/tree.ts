"use strict";

// index is child of element
// -1 root

/*
            4
        1       2
    0          3  5
                6  7

                7 4 x, x, -1, x, x, 4
*/

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNod | null;

    constructor(value: number, left: TreeNode | null, right: TreeNode | null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    constructor(value: number) {
        this.value = value;
    }
}

let root: TreeNode;

function iterateOverArray(nums: number[]) {
    let rootIndex: number;
    let links: object = {};
    for (var i = 0; i < nums.length; i++) {
        var parentIndex = nums[i];
        var nodeValue = i;
        // 4 -> [1, 7] / nodeValue -> parentIndex
        links[nodeValue] = (links[nodeValue] ?? []);
        links[nodeValue].push(parentIndex);
        if (nodeValue == -1) {
            rootIndex = i;
        }
    }
    // Construct
}

function constructTree(nums: number[]) {

    // Go from left to right in array
        // Identifying parent through its index -> recursively until the root is reached
        // Always assign child to left if possible, else right
    getParentNode(nums, 0); // 0 1 4
}

function getParentNode(nums: number[], index: number): TreeNode {
    var value = nums[index];

    // Detecting the root
    if (value == -1) {
        root = new TreeNode(index);
        return root;
    }

    // Linking the parent
    const parentNode = getParentNode(nums, value);
    const childNode = new TreeNode(value);
    if (!parentNode.left) {
        parentNode.left = childNode;
    } else if (!parentNode.right) {
        parentNode.right = childNode;
    } else {
        throw new Error('THis should never be possible');
    }
    return parentNode;
}