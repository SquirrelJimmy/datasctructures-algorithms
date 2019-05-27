import { Node, isEqual } from "./utils";

/**
 * @description 链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。
 * @author zhaibinbin
 * @export
 * @class LinkedList
 */
export class LinkedList<T> {
  private _count = 0;
  private _head: Node<T> | null = null;

  get size() {
    return this._count;
  }

  constructor(
    private equalsFn: <T>(a: T, b:T) => boolean = isEqual
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

  }

  getElementAt(index: number) {
    if (index < 0 || index > this._count) return undefined;
    if (this._head === null) return undefined;
    let current = this._head;
    for (let i = 0; i < index && current !== null; i++) {
      current = <Node<T>>(current.next);
    }
    return current
  }

  remove(element: T) {

  }

  indexOf(element: T) {

  }

  removeAt(position: number) {
    if (position < 0 || position > this._count) return undefined;
    if (this._head === null) return undefined
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

  toString() {

  }
}
