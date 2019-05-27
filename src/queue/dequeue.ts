type QueueStore<T> = {
  [key: number]: T
}

export class Dequeue<T> {
  private _store: QueueStore<T> = {};
  private _headIndex: number = 0;
  private _tailIndex: number = 0;


  get size() {
    return this._tailIndex - this._headIndex;
  }

  addFront(...elements: T[]) {
    if (this.isEmpty()) {
      this.addEnd(...elements);
    } else if (this._tailIndex > 0) {
      elements = elements.reverse();
      for (let i = 0; i < elements.length; i++) {
        this._headIndex--;
        const element = elements[i];
        this._store[this._headIndex] = element;
      }
    }
  }

  addEnd(...elements: T[]) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      this._store[this._tailIndex] = element;
      this._tailIndex++;
    }
  }

  removeFront() {
    if (this.isEmpty()) undefined;
    const front = this._store[this._headIndex];
    delete this._store[this._headIndex];
    this._headIndex++;
    return front;
  }

  removeEnd() {
    if (this.isEmpty()) undefined;
    const end = this._store[this._tailIndex - 1];
    delete this._store[this._tailIndex - 1];
    this._tailIndex--;
    return end;
  }

  peekFront() {
    if (this.isEmpty()) return undefined;
    return this._store[this._headIndex];
  }

  peekEnd() {
    if (this.isEmpty()) return undefined;
    return this._store[this._tailIndex - 1];
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

    return Object.entries(this._store)
      .sort((pre, next) => Number(pre[0]) - Number(next[0]))
      .map(item => item[1]).toString();
  }

}
