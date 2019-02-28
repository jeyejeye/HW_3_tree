function BSTree() {
    InterfaceBSTree.apply(this, arguments);
    this.root = null;

    this.count = 0;
}

BSTree.prototype = Object.create(InterfaceBSTree.prototype);
BSTree.prototype.constructor = BSTree;

function Entry(parent, value, left, right) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
};

BSTree.prototype.findPlaceToInsert = function (entry, e) {

    if (e.value < entry.value) {

        if (!entry.left) {
            entry.left = e;
            e.parent = entry;
            return true;

        } else {
            return this.findPlaceToInsert(entry.left, e)
        }
    } else {
        if (!entry.right) {
            entry.right = e;
            e.parent = entry;
            return true;

        } else {
            return this.findPlaceToInsert(entry.right, e)
        }
    }
};


// Добавляет новый элемент к бинарному дереву  и возвращает количество элементов в структуре.

BSTree.prototype.insert = function (value) {

    if (arguments.length === 0) {
        return this.count;
    }
    let e = new Entry(null, value, null, null);

    if (this.root) {
        if (this.findPlaceToInsert(this.root, e)) {
            return ++this.count;
        }
    } else {
        this.root = e;
        this.count++;
    }
    return this.count;
};


// Метод удаляет все элементы из структуры

BSTree.prototype.empty = function () {
    this.root = null;
    this.count = 0;
}


BSTree.prototype.init = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        this.insert(arr[i]);
    }
    return;
};


// Метод ищет значение среди элементов бинарного дерева и возвращает элемент содержащий это значение

BSTree.prototype.find = function (value) {

    if (arguments.length === 0) {
        return null;
    }

    if (this.root !== null) {
        return this.findValue(this.root, value);
    } else {
        return null;
    }
};

BSTree.prototype.findValue = function (entry, value) {

    if (value < entry.value) {

        if (entry.left !== null) {
            if (entry.left.value === value) {
                return entry.left;
            } else {
                return this.findValue(entry.left, value)
            }
        }
    } else {

        if (entry.right !== null) {
            if (entry.right.value === value) {
                return entry.right;
            } else {
                return this.findValue(entry.right, value)
            }
        }
    }
    return null;
}

// Метод преобразует бинарное дерево в отсортированный массив

BSTree.prototype.toArray = function () {
    let arr = [];
    if (this.root) {
        this.toOrder((value) => arr.push(value),this.root);
    }
    return arr;
}

// Метод преобразует бинарное дерево в двухсвязный список

BSTree.prototype.toLinkedList = function () {
    let arr = LinkedList0();
    if (this.root) {
        this.toOrder((value) => arr. myPush(value),this.root);
    }
    return arr;
}

// Метод преобразует бинарное дерево в строку

BSTree.prototype.toString = function () {
    let str = '';
    if (this.root) {
        this.toOrder((value) => (str = str+', '+value ),this.root);
    }
    str = str.slice(2);
    return str;
}

// Метод реализует симметричный обход бинарного дерева

BSTree.prototype.toOrder = function (callback, entry) {
    if (entry.left) {
        this.toOrder(callback, entry.left);
    }

    callback(entry.value);

    if (entry.right) {
        this.toOrder(callback, entry.right);
    }
}
