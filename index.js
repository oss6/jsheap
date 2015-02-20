var HeapTree = function (params) {
    var _arr = params.src || [];
    var _cmp = params.comparator || function (a, b) { return a - b; };
    
    Math.log2 = Math.log2 || function(x) {
  		return Math.log(x) / Math.LN2;
	};
    
    var intDiv = function (a, b) {
		var result = a / b;
		return result >= 0 Math.floor(result) : Math.ceil(result);
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
    
    this.level = function (i) {
    	return Math.floor(Math.log2(i));
    }
    
    this.parent = function (i) {
    	return intDiv(i, 2);
    };
    
    this.left = function (i) {
    	return 2 * i;
    }
    
    this.right = function (i) {
    	return 2 * i + 1;
    }
	
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
		var n = arr.length - 1;
		var tmp;
		
		if (left(i) > n) // no children
			return
		else if (right(i) > n) { // only left child
			if (_arr[i] < _arr[left(i)]) {
				tmp = _arr[i];
				_arr[i] = _arr[left(i)];
				_arr[left(i)] = tmp;
			}
		}
		else { // Two children
			if (_arr[left(i)] > _arr[right(i)] && _arr[i] < _arr[left(i)]) {
				tmp = _arr[i];
				_arr[i] = _arr[left(i)];
				_arr[left(i)] = tmp;
				bubbleDown(left(i));
			}
			else if (_arr[i] < _arr[right(i)]) {
				tmp = _arr[i];
				_arr[i] = _arr[right(i)];
				_arr[right(i)] = tmp;
				bubbleDown(right(i));
			}
		}
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

HeapTree.heapify = function (arr) {
	for (var i = arr.length - 1; i > 0; i--)
		this.bubbleDown(i);
};

module.exports = HeapTree;
