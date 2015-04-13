var assert = require('assert'),
	HeapTree = require('./');

suite('HeapTree', function () {
	
	var heap = new HeapTree();
	
	test('isEmpty should return true when the array length is 0', function () {
		assert.equal(true, heap.isEmpty());
	});
	
	test('isEmpty should return false when the array length is > 0', function () {
		heap = new HeapTree({
			src: [3, 2, 1]
		});
		assert.equal(false, heap.isEmpty());
	});
	
	test('root', function () {
		heap = new HeapTree();
		assert.equal(undefined, heap.root());
		
		heap = new HeapTree({
			src: [3, 2, 1]
		});
		assert.equal(3, heap.root());
	});
	
	
	test('lastLeaf', function () {
		heap = new HeapTree();
		assert.equal(undefined, heap.lastLeaf());
		
		heap = new HeapTree({
			src: [3, 2, 1]
		});
		assert.equal(1, heap.lastLeaf());
	});
	
	test('level', function () {
		heap = new HeapTree();
		assert.equal(2, heap.level(5));
	});
});
