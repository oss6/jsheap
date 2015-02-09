var assert = require('assert'),
	ht = require('./../index');
	
suite('HeapTree', function () {
	
	var heap = new ht();
	
	test('isEmpty should return true when the array length is 0', function () {
		assert.equal(true, heap.isEmpty());
	});
	
	test('isEmpty should return false when the array length is > 0', function () {
		heap = new ht({
			src: [1, 2, 3]
		});
		assert.equal(false, heap.isEmpty());
	});
	
});
