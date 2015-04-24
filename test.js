var assert = require('assert'),
	HeapTree = require('./');

suite('HeapTree', function () {
	
	var heap = new HeapTree();

    test('heapify', function () {
        assert.deepEqual([3, 2, 1], HeapTree.heapify([1, 2, 3]));
        assert.deepEqual(['zorro', 'hello', 'abc'], HeapTree.heapify(['abc', 'hello', 'zorro']));
    });

    test('level', function () {
        assert.equal(2, HeapTree.level(5));
    });

    test('parent', function () {
        assert.equal(2, HeapTree.parent(5));
    });

    test('left', function () {
        assert.equal(8, HeapTree.left(4));
    });

    test('right', function () {
        assert.equal(9, HeapTree.right(4));
    });

	test('isEmpty', function () {
		assert.equal(true, heap.isEmpty());

        heap = new HeapTree({
            src: [3, 2, 1]
        });
        assert.equal(false, heap.isEmpty());
	});
	
	test('root', function () {
		heap = new HeapTree();
		assert.equal(undefined, heap.root());
		
		heap = new HeapTree({
			src: [2, 3, 1]
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

    test('insert', function () {
        heap = new HeapTree({
            src: [5, 1, 3, 4]
        });

        assert.deepEqual([5, 4, 3, 1, 2], heap.insert(2).getArray());
    });

    test('deleteRoot', function () {
        heap = new HeapTree({
            src: [6, 2, 1, 7, 3]
        });

        assert.deepEqual([6, 3, 2, 1], heap.deleteRoot().getArray());
    });

    test('del', function () {
        heap = new HeapTree({
            src: [6, 2, 1, 7, 3]
        });

        assert.deepEqual([7, 6, 3, 1], heap.del(3).getArray());
    });
});