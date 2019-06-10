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
    } else if (this._tail === null) {
      this._tail = node;
      this._tail.prev = this._head;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this._count++;
  }


}
