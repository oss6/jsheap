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
    		// swap and bubble up
    		var tmp = _arr[i];
    		_arr[i] = _arr[parent(i)];
    		_arr[parent(i)] = tmp;
    		
    		this.bubbleUp(parent(i));
    	}
    }
	
	this.bubbleDown = function (i) {
		
	}
	
    this.insert = function (k) {
		_arr.push(k);
		this.bubbleUp(_arr.length - 1);
    };
    
    this.deleteRoot = function () {
    	_arr[0] = this.lastLeaf();
    	_arr.shift();
    	this.bubbleDown(0);
    };
    
    this.del = function (i) {
    	_arr[i] = this.lastLeaf();
    	_arr.shift();
    	this.bubbleUp(i);
    	this.bubbleDown(i);
    };
}

module.exports = HeapTree;
