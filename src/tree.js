import { mergeSort, removeDup } from './sort.js'

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(arr) {
        this.root = sortedArrayToBST(removeDup(mergeSort(arr)))
    }

    insertNode(valueToInsert) {
        valueToInsert = Math.round(valueToInsert)
        const newNode = new Node(valueToInsert)

        if (this.root === null) {
            this.root = newNode
            return this.root
        }

        let current = this.root
        let parent = null

        while (current !== null) {
            parent = current
            if (valueToInsert < current.data) {
                current = current.left
            } else if (valueToInsert > current.data) {
                current = current.right
            } else {
                return this.root
            }
        }

        if (valueToInsert < parent.data) {
            parent.left = newNode
        } else {
            parent.right = newNode
        }

        return this.root
    }

    rebalance() {
        const values = []
        this.inorder(node => values.push(node.data))
        const uniqueSorted = removeDup(mergeSort(values))
        return sortedArrayToBST(uniqueSorted)
    }

    isBalanced() {
        function checkHeight(node) {
            if (!node) return 0

            const leftHeight = checkHeight(node.left)
            if (leftHeight === -1) return -1

            const rightHeight = checkHeight(node.right)
            if (rightHeight === -1) return -1

            if (Math.abs(leftHeight - rightHeight) > 1) return -1

            return Math.max(leftHeight, rightHeight) + 1
        }

        return checkHeight(this.root) !== -1
    }

    inorder(callback) {
        function traverse(node) {
            if (!node) return
            traverse(node.left)
            callback(node)
            traverse(node.right)
        }
        traverse(this.root)
    }

    preorder(callback) {
        function traverse(node) {
            if (!node) return
            callback(node)
            traverse(node.left)
            traverse(node.right)
        }
        traverse(this.root)
    }

    postorder(callback) {
        function traverse(node) {
            if (!node) return
            traverse(node.left)
            traverse(node.right)
            callback(node)
        }
        traverse(this.root)
    }

    levelOrder(callback) {
        if (typeof callback !== 'function') throw new Error("callback must be a function")

        let queue = [this.root]
        while (queue.length > 0) {
            let current = queue.shift()
            callback(current)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
    }

    height(value) {
        function getHeight(node) {
            if (!node) return -1
            return 1 + Math.max(getHeight(node.left), getHeight(node.right))
        }

        let current = this.root
        while (current) {
            if (value === current.data) return getHeight(current)
            current = value < current.data ? current.left : current.right
        }

        return null
    }

    depth(value) {
        let depth = 0
        let current = this.root

        while (current) {
            if (current.data === value) return depth
            current = value < current.data ? current.left : current.right
            depth++
        }

        return null
    }
}

function callBack(node) {
    console.log(node.data)
}

function getRandomArray(length) {
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1)
    }
    return arr
}

function buildTree(arr, start, end) {
    if (start > end) return null

    let mid = Math.floor((start + end) / 2)
    let node = new Node(arr[mid])

    node.left = buildTree(arr, start, mid - 1)
    node.right = buildTree(arr, mid + 1, end)

    return node
}

function sortedArrayToBST(arr) {
    return buildTree(arr, 0, arr.length - 1)
}

function preOrder(node) {
    if (!node) return
    console.log(node.data)
    preOrder(node.left)
    preOrder(node.right)
}

export { Node, Tree, callBack, getRandomArray, buildTree, sortedArrayToBST, preOrder }
