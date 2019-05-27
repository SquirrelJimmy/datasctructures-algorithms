
export class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null = null
  ) {}
}

export function isEqual<T>(a: T, b: T) {
  return a === b;
}
