
/**
 * @description 栈数据结构 栈是一种遵从后进先出（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。基于数组实现
 * @author zhaibinbin
 * @class Stack
 */
export class Stack<T extends any> {
  get size() {
    return this._store.length;
  }
  private _store: T[] = [];

  // 入栈
  push(element: T) {
    this._store.push(element);
    return element;
  }

  // 出栈
  pop() {
    return this._store.pop();
  }

  // 栈顶元素
  peek() {
    const LAST = this.size ? this.size - 1 : 0;
    return this._store[LAST];
  }

  isEmpty() {
    return !this.size;
  }

  clear() {
    this._store = [];
  }

  toString() {
    return this._store.toString();
  }
}
