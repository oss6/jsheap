# jsheap [![Build Status](https://travis-ci.org/oss6/jsheap.svg)](https://travis-ci.org/oss6/jsheap)
> Binary heaps implementation in Javascript

A binary heap is a complete binary tree which satisfies the heap ordering property. The ordering can be one of two types:
- the **min-heap** property: the value of each node is greater than or equal to the value of its parent, with the minimum-value element at the root.
- the **max-heap** property: the value of each node is less than or equal to the value of its parent, with the maximum-value element at the root.

A heap is not a sorted structure and can be regarded as partially ordered: there is no particular relationship among nodes on any given level, even among the siblings.
It is useful data structure when you need to remove the object with the highest (or lowest) priority. A common use of a heap is to implement a priority queue.

## [Time complexity](http://en.wikipedia.org/wiki/Binary_heap)

## Install
```sh
$ npm install --save jsheap
```

## API

### HeapTree(params)
Initialises a HeapTree object

- Parameters:
    + `params`: object with keys 'src' (source array) and 'check' (whether to perform a heapify)

### HeapTree.getArray()
Gets the underlying array structure

### HeapTree.heapify(arr)
Transform an array into a max-heap

### HeapTree.level(i)
Gets the level of a node

### HeapTree.parent(i)
Gets the parent of a node

### HeapTree.left(i)
Gets the left child of a node

### HeapTree.right(i)
Gets the right child of a node

### ht.root()
Gets the root of the heap

### ht.lastLeaf()
Gets the last leaf of the heap

### ht.isEmpty()
Checks whether the heap is empty

### ht.bubbleUp(i)
Bubble up a node to its correct position

### ht.bubbleDown(i)
Bubble down a node to its correct position

### ht.insert(k)
Inserts a node into the heap

### ht.deleteRoot()
Deletes the root

### ht.delete(i)
Deletes a node from the heap