
/**
 * Initialises a HeapTree object
 * @param params Parameters - keys: src --> source array, check --> do a heapify
 * @constructor
 */
var HeapTree = function (params) {
    // Unpack arguments + attributes
	params = params || {};
    var _check = typeof params.check !== 'undefined' ? params.check : true;

    this._arr = params.src || [];
    if (this._arr.length > 0 && _check) {
        this._arr = HeapTree.heapify(this._arr);
    }
};

// Polyfill
Math.log2 = Math.log2 || function(x) {
    return Math.log(x) / Math.LN2;
};

/**
 * Converts an array into a max-heap
 * @param arr Array to convert
 * @returns The max-heap
 */
HeapTree.heapify = function (arr) {
    var ht = new HeapTree({
        src: arr,
        check: false
    });

    for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
        ht.bubbleDown(i);
    }

    return ht.getArray();
};

/**
 * Gets the level of a node
 * @param i Index
 * @returns {number}
 */
HeapTree.level = function (i) {
    return Math.floor(Math.log2(i));
};

/**
 * Gets the parent of a node
 * @param i Index
 * @returns {number}
 */
HeapTree.parent = function (i) {
    var result = i / 2;
    return result >= 0 ? Math.floor(result) : Math.ceil(result);
};

/**
 * Gets the left child of a node
 * @param i Index
 * @returns {number}
 */
HeapTree.left = function (i) {
    return 2 * i;
};

/**
 * Gets the right child of a node
 * @param i Index
 * @returns {number}
 */
HeapTree.right = function (i) {
    return 2 * i + 1;
};

/**
 * Gets the internal array as a max-heap
 * @returns {Array}
 */
HeapTree.prototype.getArray = function () {
    return this._arr;
};

/**
 * Gets the root of the heap
 * @returns {*}
 */
HeapTree.prototype.root = function () {
    return this.isEmpty() ? undefined : this._arr[0];
};

/**
 * Gets the last leaf of the heap
 * @returns {*}
 */
HeapTree.prototype.lastLeaf = function () {
    return this.isEmpty() ? undefined : this._arr[this._arr.length - 1];
};

/**
 * Checks if the heap is empty
 * @returns {boolean}
 */
HeapTree.prototype.isEmpty = function () {
    return this._arr.length === 0;
};

/**
 * Bubble up a node to its correct position
 * @param i Node's index
 * @returns {HeapTree}
 */
HeapTree.prototype.bubbleUp = function (i) {
    if (i === 0) // Is root
        return;

    if (this._arr[i] > this._arr[HeapTree.parent(i)]) {
        // Swap and bubble up
        var tmp = this._arr[i];
        this._arr[i] = this._arr[HeapTree.parent(i)];
        this._arr[HeapTree.parent(i)] = tmp;

        this.bubbleUp(HeapTree.parent(i));
    }

    return this;
};

/**
 * Bubble down a node to its correct position
 * @param i Node's index
 * @returns {HeapTree}
 */
HeapTree.prototype.bubbleDown = function (i) {
    var n = this._arr.length - 1,
        tmp;

    if (HeapTree.left(i) > n) // no children
        return;

    if (HeapTree.right(i) > n) { // only left child
        if (this._arr[i] < this._arr[HeapTree.left(i)]) {
            tmp = this._arr[i];
            this._arr[i] = this._arr[HeapTree.left(i)];
            this._arr[HeapTree.left(i)] = tmp;
        }
    }
    else { // Two children
        if (this._arr[HeapTree.left(i)] > this._arr[HeapTree.right(i)] && this._arr[i] < this._arr[HeapTree.left(i)]) {
            // Swap left with root
            tmp = this._arr[i];
            this._arr[i] = this._arr[HeapTree.left(i)];
            this._arr[HeapTree.left(i)] = tmp;
            this.bubbleDown(HeapTree.left(i));
        }
        else if (this._arr[i] < this._arr[HeapTree.right(i)]) {
            // Swap right with root
            tmp = this._arr[i];
            this._arr[i] = this._arr[HeapTree.right(i)];
            this._arr[HeapTree.right(i)] = tmp;
            this.bubbleDown(HeapTree.right(i));
        }
    }

    return this;
};

/**
 * Inserts a node into the heap
 * @param k The node
 * @returns {HeapTree}
 */
HeapTree.prototype.insert = function (k) {
    this._arr.push(k);
    this.bubbleUp(this._arr.length - 1);

    return this;
};

/**
 * Deletes the root
 * @returns {HeapTree}
 */
HeapTree.prototype.deleteRoot = function () {
    this._arr[0] = this.lastLeaf();
    this._arr.shift();
    this.bubbleDown(0);

    return this;
};

/**
 * Deletes a node from the heap
 * @param i Node's index
 * @returns {HeapTree}
 */
HeapTree.prototype.del = function (i) {
    this._arr[i] = this.lastLeaf();
    this._arr.pop();
    this.bubbleUp(i);
    this.bubbleDown(i);

    return this;
};

module.exports = HeapTree;