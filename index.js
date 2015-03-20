var HeapTree = function (arr, comparator) {
    var _arr = arr;
    
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

    };
    
    this.del = function (k) {
    
    };
}

module.exports = HeapTree;
