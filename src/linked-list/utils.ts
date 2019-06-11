
export class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null = null
  ) { }

  toString(callback: (value: T) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }

}

export class DeNode<T> extends Node<T> {
  constructor(
    public value: T,
    public next: DeNode<T> | null = null,
    public prev: DeNode<T> | null = null,
  ) {
    super(value, next);
  }
}

export function isEqual<T>(a: T, b: T) {
  return a === b;
}
