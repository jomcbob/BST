import { prettyPrint } from './sort.js'
import { Tree, getRandomArray } from './tree.js'

let tree = new Tree(getRandomArray(10))

console.log("Initial Tree:")
prettyPrint(tree.root)

console.log("Is Initial Tree Balanced?", tree.isBalanced())

console.log("Level Order:")
tree.levelOrder(node => console.log(node.data))

console.log("Preorder:")
tree.preorder(node => console.log(node.data))

console.log("Postorder:")
tree.postorder(node => console.log(node.data))

console.log("Inorder:")
tree.inorder(node => console.log(node.data))

tree.insertNode(120)
tree.insertNode(130)
tree.insertNode(140)
tree.insertNode(150)
tree.insertNode(160)

console.log("Tree After Inserting")
prettyPrint(tree.root)

console.log("Is Balanced?", tree.isBalanced())

tree.root = tree.rebalance()

console.log("Tree After Rebalancing:")
prettyPrint(tree.root)

console.log("Is Balanced?", tree.isBalanced())

console.log("Level Order (After Rebalancing):")
tree.levelOrder(node => console.log(node.data))

console.log("Preorder (After Rebalancing):")
tree.preorder(node => console.log(node.data))

console.log("Postorder (After Rebalancing):")
tree.postorder(node => console.log(node.data))

console.log("Inorder (After Rebalancing):")
tree.inorder(node => console.log(node.data))
