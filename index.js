var HeapTree = function (arr, comparator) {
    var _arr = arr;
    
    this.heapify = function (arr) {
	
    };

    this.insert = function (k) {

    };
    
    this.del = function (k) {
    
    };
    
    this.root = function () {
    	return this.isEmpty() ? undefined : _arr[0];
    };

    this.isEmpty = function () {
    	return _arr.length === 0;
    };
}

module.exports = HeapTree;
