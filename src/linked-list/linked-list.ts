import { Node, isEqual } from "./utils";

/**
 * @description 链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。
 * @export
 * @class LinkedList
 */
export class LinkedList<T> {
  protected _count = 0;
  protected _head: Node<T> | null = null;

  get size() {
    return this._count;
  }

  set size(value: number) {
    this.size = this._count;
  }

  get head() {
    return this._head;
  }

  set head(value: Node<T> | null) {
    this.head = this._head;
  }

  constructor(
    protected _equalsFn: <T>(a: T, b:T) => boolean = isEqual
  ) { }

  push(element: T) {
    const node = new Node(element);
    if (this._head === null) {
      this._head = node;
    } else {
      let current = this._head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this._count++;
  }

  insert(element: T, position: number) {
    if (position < 0 || position > this._count) return false;
    const node = new Node(element);
    if (position === 0) {
      if (this._head) {
        const current = this._head;
        node.next = current;
      }
      this._head = node;
    } else {
      const prev = <Node<T>>this.getElementAt(position - 1);
      const current = prev.next;
      prev.next = node;
      node.next = current;
    }
    this._count++;
    return true;
  }

  getElementAt(index: number) {
    if (index < 0 || index > this._count) return null;
    if (this._head === null) return null;
    let current = this._head;
    for (let i = 0; i < index && current !== null; i++) {
      current = <Node<T>>(current.next);
    }
    return current
  }

  remove(element: T) {
    const index = this.indexOf(element);
    this.removeAt(index);
  }

  indexOf(element: T) {
    if (this._head == null) return -1;
    let current = this._head;
    let i = 0
    while (!!current.next) {
      if (this._equalsFn(current.value, element)) {
        return i
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  removeAt(position: number) {
    if (position < 0 || position > this._count) return null;
    if (this._head === null) return null
    if (position === 0) {
      const res = this._head;
      this._head = res.next;
      return res.value;
    } else {
      const prev = <Node<T>>this.getElementAt(position - 1);
      const current = <Node<T>>prev.next;
      prev.next = current.next;
      this._count--;
      return current.value
    }
  }

  find(callback: (value: T) => boolean) {
    let current = this._head;
    while (current) {
      if (callback(current.value)) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }

  toArray() {
    let current = this._head;
    let arr: Node<T>[] = [];
    while (current) {
      arr.push(current);
      current = current.next;
    }
    return arr;
  }

  fromArray(values: T[]) {
    values.forEach(value => {
      this.push(value);
    })
    return this;
  }

  clear() {
    this._head = null;
    this._count = 0;
  }

  toString(callback: (value: T) => string) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

}
