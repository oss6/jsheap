var HeapTree = function (arr, comparator) {
    var _arr = arr;
    var _cmp = comparator;
    
    this.root = function () {
    	return this.isEmpty() ? undefined : _arr[0];
    };
	
	this.lastLeaf = function () {
		return this.isEmpty() ? undefined : _arr[_arr.length - 1];
	};
	
    this.isEmpty = function () {
    	return _arr.length === 0;
    };
    
    this.parent = function (i) {
    	
    }
    	
    this.heapify = function (arr) {
	
    };
	
	this.bubbleUp = function (i) {
    	if (i === 0) // is root
    		return
    	else if (heap[i] > heap[this.parent(i)]) {
    		// swap and
    		this.bubbleUp(parent(i));
    	}
    }
	
    this.insert = function (k) {
		_arr.push(k);
		this.bubbleUp(_arr.length - 1);
    };
    
    this.del = function (k) {
    
    };
}

module.exports = HeapTree;
