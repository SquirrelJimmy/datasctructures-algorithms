import { Stack as StackArray } from './stack-array';
import { Stack as StackObject } from './stack-object';

const stackArray = new StackArray<number>();
const stackObject = new StackObject<{name: string, age: number}>()
stackObject.push({ name: 'mili', age: 18 });
stackObject.push({ name: 'mike', age: 19 });
stackObject.push({ name: 'lilei', age: 20 });

stackArray.push(1)
stackArray.push(2)

console.log(stackObject.peek(), stackArray.peek());
// stackObject.clear()
// stackArray.clear()
// console.log(stackObject.size, stackArray.size);

console.log(stackObject.toString());
console.log(stackArray.toString());

console.log(Object.getOwnPropertyNames(stackObject));
