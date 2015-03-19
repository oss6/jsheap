var HeapTree = function (arr, comparator) {
    var _arr = arr;
    var _cmp = comparator;
    
    var bubbleUp = function (i) {
    
    }
    
    this.root = function () {
    	return this.isEmpty() ? undefined : _arr[0];
    };
	
	this.lastLeaf = function () {
		return this.isEmpty() ? undefined : _arr[_arr.length - 1];
	};
	
    this.isEmpty = function () {
    	return _arr.length === 0;
    };
    
    this.heapify = function (arr) {
	
    };

    this.insert = function (k) {
		_arr.push(k);
		bubbleUp(_arr.length - 1);
    };
    
    this.del = function (k) {
    
    };
}

module.exports = HeapTree;
