import { DeNode, isEqual } from "./utils";
import { LinkedList } from "./linked-list";



export class DoublyLinkedList<T> extends LinkedList<T> {
  protected _head: DeNode<T> | null = null;
  protected _tail: DeNode<T> | null = null;

  constructor(_equalsFn: <T>(a: T, b:T) => boolean = isEqual) {
    super(_equalsFn);
  }

  push(element: T) {
    const node = new DeNode(element);
    if (this._head === null) {
      this._head = node;
      this._tail = node;
    } else if (this._tail) {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this._count++;
  }

  insert(element: T, position: number) {
    if (position < 0 || position >= this._count) return false;
    const node = new DeNode(element);
    if (position === 0) {
      if (this._head) {
        const cacheNode = this._head;
        node.next = cacheNode;
        cacheNode.prev = node;
      } else {
        this._tail = node;
      }
      this._head = node;
    } else if (position === this._count) {
      const cacheTail = <DeNode<T>>this._tail;
      this._tail = node;
      node.prev = cacheTail;
      cacheTail.next = node;
    } else {
      const preNode = <DeNode<T>>this.getElementAt(position - 1);
      const curtNode = <DeNode<T>>preNode.next;
      preNode.next = node;
      node.prev = preNode;
      node.next = curtNode;
      curtNode.prev = node;
    }
    this._count++;
    return true;
  }

  removeAt(position: number) {
    if (position < 0 || position >= this._count) return null;
    let curent = <DeNode<T>>this._head;
    if (position === 0) {
      this._head = curent.next;
      if (this._count === 1) {
        this._tail = null;
      } else {
        (this._head as DeNode<T>).prev = null
      }
    } else if (position === this._count - 1) {
      curent = <DeNode<T>>this._tail;
      this._tail = curent.prev;
      (this._tail as DeNode<T>).next = null
    } else {
      curent = <DeNode<T>>this.getElementAt(position);
      const prev = <DeNode<T>>curent.prev;
      prev.next = curent.next;
      (curent.next as DeNode<T>).prev = prev;
    }
    this._count--;
    return curent.value;
  }
}
