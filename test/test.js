var assert = require('assert'),
	ht = require('./../index');
	
suite('HeapTree', function () {
	
	var heap = new ht();
	
	test('isEmpty should return true when the array length is 0', function () {
		
		assert.equal(true, heap.isEmpty());
	});
	
});
