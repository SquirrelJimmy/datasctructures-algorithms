interface Iterable<T> {
  [Symbol.iterator](): IterableIterator<T>;
}

export class Eset<T> extends Set<T> {

  static map<T = any>(iterable: Iterable<T>, cb: (item: T) => any) {
    for (const item of iterable) {
      cb(item);
    }
  }

  // 并集
  static union<T = any>(oneSet: Eset<T>, otherSet: Eset<T>) {
    const unionSet = new Eset<T>([...oneSet, ...otherSet]);
    // Eset.map(oneSet.values(), (item) => {
    //   unionSet.add(item);
    // })
    // Eset.map(otherSet.values(), (item) => {
    //   unionSet.add(item);
    // })
    return unionSet;
  }

  // 交集
  static intersection<T = any>(oneSet: Eset<T>, otherSet: Eset<T>) {
    const intersectSet = new Eset();
    if (oneSet.size <= otherSet.size) {
      Eset.map(oneSet.values(), (item) => {
        if (otherSet.has(item)) {
          intersectSet.add(item)
        }
      })
    } else {
      Eset.map(otherSet.values(), (item) => {
        if (otherSet.has(item)) {
          intersectSet.add(item)
        }
      })
    }
    return intersectSet
  }

  // 对另一集合的差集
  difference(otherSet: Set<any>) {
    const differenceSet = new Eset();
    Eset.map(this.values(), item => {
      if (!otherSet.has(item)) {
        differenceSet.add(item);
      }
    });
    return differenceSet
  }

  // 是否是另一个集合的子集
  isSubsetOf(otherSet: Set<any>) {
    if (this.size > otherSet.size) return false;
    let isSubset = true;
    Eset.map(this.values(), item => {
      if (!otherSet.has(item)) {
        isSubset = false;
      }
    });
    return isSubset;
  }
}

// const set1 = new Eset();
// const set2 = new Eset();

// set1.add(1);
// set1.add(2);
// set1.add(3);
// set2.add(3);
// set2.add(5);
// set2.add(6);


// console.log(Eset.union(set1, set2));
