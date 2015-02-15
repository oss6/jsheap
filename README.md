# jsheap
> Binary heaps implementation in Javascript

A binary heap is a complete binary tree which satisfies the heap ordering property. The ordering can be one of two types:
- the **min-heap** property: the value of each node is greater than or equal to the value of its parent, with the minimum-value element at the root.
- the **max-heap** property: the value of each node is less than or equal to the value of its parent, with the maximum-value element at the root.

A heap is not a sorted structure and can be regarded as partially ordered: there is no particular relationship among nodes on any given level, even among the siblings.
It is useful data structure when you need to remove the object with the highest (or lowest) priority. A common use of a heap is to implement a priority queue.

## Time complexity

## Install
```sh
$ npm install --save jsheap
```

## Usage
```js

```

## API

### HeapTree(params)

### HeapTree.heapify(arr)

### ht.root()

### ht.lastLeaf()

### ht.isEmpty()

### ht.level(i)

### ht.parent(i)

### ht.left(i)

### ht.right(i)

### ht.bubbleUp(i)

### ht.bubbleDown(i)

### ht.insert(k)

### ht.deleteRoot()

### ht.delete(i)
