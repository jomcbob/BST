function mergeSort(arr) {
    if (arr.length <= 1) return arr

    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    let sortedArr = []
    let i = 0, j = 0

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr.push(left[i++])
        } else {
            sortedArr.push(right[j++])
        }
    }

    return sortedArr.concat(left.slice(i)).concat(right.slice(j))
}

function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) return

    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)

    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
}

function removeDup(arr) {
    let newArr = []
    let prev = null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
            newArr.push(arr[i])
            prev = arr[i]
        }
    }
    return newArr
}

export { mergeSort, merge, prettyPrint, removeDup }
