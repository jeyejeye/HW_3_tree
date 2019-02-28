describe('BSTree ', function () {

    let objTree = new BSTree();
    describe('BSTree checked method insert', function () {
        const testData = [
            {arrA: [50], expected1: 1, expected2: 50},
            {arrA: [8, 67, 93, 18, 105, 13], expected1: 7, expected2: 50},
        ];
        testData.forEach(function (data) {
            const {arrA, expected1, expected2} = data;
            it(`should return count = ${expected1}  and root = ${expected2} if insert was \[${arrA}\] `, function () {

                let actual1;

                for (let i = 0; i < arrA.length; i++) {
                    actual1 = objTree.insert(arrA[i]);
                }
                let actual2 = objTree.root.value;

                assert.strictEqual(actual1, expected1);
                assert.strictEqual(actual2, expected2);
            });
        });

        const expected = 7;

        it(`should return unchanged count = ${expected} if empty arguments`, function () {
            actual = objTree.insert();

            assert.strictEqual(actual, expected);
        });
    });


    describe('BSTree checked method empty', function () {
        const expected1 = 0;
        const expected2 = null;

        it(`should return count = ${expected1}  and root = ${expected2} if empty `, function () {
            objTree.empty();
            let actual1 = objTree.count;
            let actual2 = objTree.root;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
        });
    });
});

describe('BSTree checked method init', function () {
    let objTree = new BSTree();

    const testData = [
        {arrA: [50], expected1: 1, expected2: 50},
        {arrA: [8, 67, 93, 18, 105, 13], expected1: 7, expected2: 50},
    ];
    testData.forEach(function (data) {
        const {arrA, expected1, expected2} = data;
        it(`should return count = ${expected1}  and root = ${expected2} if insert was \[${arrA}\] `, function () {
            objTree.init(arrA);
            let actual1 = objTree.count;
            let actual2 = objTree.root.value;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);
        });
    });
});

describe('BSTree checked method toArray', function () {
    let objTree = new BSTree();

    const testData = [
        {arrA: [], expected1: 0, expected2: []},
        {arrA: [50], expected1: 1, expected2: [50]},
        {arrA: [8, 67, 93, 18, 105, 13], expected1: 6, expected2: [8, 13, 18, 67, 93, 105]},
    ];
    testData.forEach(function (data) {
        const {arrA, expected1, expected2} = data;
        it(`should return count = ${expected1}  and arr = \[${expected2}\] if insert was \[${arrA}\] `, function () {
            objTree.init(arrA);
            let actual2 = objTree.toArray();
            let actual1 = actual2.length;

            assert.strictEqual(actual1, expected1);
            assert.deepEqual(actual2, expected2);
            objTree.empty();
        });
    });
});


describe('BSTree checked method find', function () {
    let objTree = new BSTree();
    const arrA = [65, 31, 28, 67, 93, 18, 105, 13, 22, 222];
    objTree.init(arrA);
    const testData = [
        {value: 13, expected1: null, expected2: null},
        {value: 222, expected1: null, expected2: null},
    ];
    testData.forEach(function (data) {
        const {value, expected1, expected2} = data;
        it(`should return entry: entry.left = ${expected1}  and entry.right = \[${expected2}\] 
                                        if insert was \[${arrA}\]  and value =${value}`, function () {
            let obj = objTree.find(value);
            let actual1 = obj.left;
            let actual2 = obj.right;

            assert.strictEqual(actual1, expected1);
            assert.strictEqual(actual2, expected2);

        });
    });
    const value1 = 45;
    const expected = null;
    it(`should return null,  if value not find: insert was \[${arrA}\]  and value =${value1}`, function () {
        let actual = objTree.find(value1);

        assert.strictEqual(actual, expected);
    });
});


describe('BSTree checked method toString', function () {
    let objTree = new BSTree();

    const testData = [
        {arrA: [], expected: ''},
        {arrA: [50], expected: '50'},
        {arrA: [8, 67, 93, 47, 18, 123, 105, 13], expected: '8, 13, 18, 47, 67, 93, 105, 123'},
    ];
    testData.forEach(function (data) {
        const {arrA, expected} = data;
        it(`should return string = ${expected}  if insert was \[${arrA}\] `, function () {
            objTree.init(arrA);
            let actual = objTree.toString();

            assert.strictEqual(actual, expected);
            objTree.empty();
        });
    });
});
