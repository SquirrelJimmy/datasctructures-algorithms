type StackValue<T> = { [key: number]: T }
export class Stack<T extends any> {
  private _store: StackValue<T> = {};
  private _index = 0;

  get size() {
    return this._index;
  }

  isEmpty() {
    return !this._index;
  }

  push(element: T) {
    this._store[this._index] = element;
    this._index++;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    this._index--;
    const element = this._store[this._index];
    delete this._store[this._index];
    return element;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this._store[this.size - 1];
  }

  clear() {
    this._store = {};
    this._index = 0;
  }

  toString() {
    if (this.isEmpty()) return '';
    return Object.values(this._store).toString()
  }
}
