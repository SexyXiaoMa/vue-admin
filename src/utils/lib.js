// 链表节点
export class LinkNode {
  constructor() {
    this._id = 0;
    this._prev = null;
    this._next = null;
    this._data = null;
  }
}

// 双向链表
export class LinkList {
  constructor() {
    this._head = null;
    this._foot = null;
    this._length = 0;
  }
  add(node) {
    if (this._length === 0) {
      this._head = node;
      this._foot = node;
    } else {
      this._foot._next = node;
      node._prev = this._foot;
    }
    this._length++;
  }
  remove() {}
  map() {}
}
