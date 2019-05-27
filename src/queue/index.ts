type QueueStore<T> = {
  [key: number]: T
}

/**
 * @description Queue 队列 队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。
 * @author zhaibinbin
 * @export
 * @class Queue
 * @template T
 */
export class Queue<T> {
  private _store: QueueStore<T> = {};
  private _headIndex = 0;
  private _tailIndex = 0;

  get size() {
    return this._tailIndex - this._headIndex;
  }
  // 入队
  enqueue(...elements: T[]) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      this._store[this._tailIndex] = element;
      this._tailIndex++;
    }
  }

  // 出队
  dequeue() {
    if (this.isEmpty()) return undefined;
    const element = this._store[this._headIndex];
    delete this._store[this._headIndex];
    this._headIndex++;
    return element;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this._store[this._headIndex];
  }

  isEmpty() {
    return !this.size;
  }

  clear() {
    this._store = {};
    this._headIndex = 0;
    this._tailIndex = 0;
  }

  toString() {
    if (this.isEmpty()) return '';
    return Object.values(this._store).toString();
  }

}
