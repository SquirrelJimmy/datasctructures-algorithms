import { Queue } from ".";

const queue = new Queue<string>();


queue.enqueue('Alice', 'Mike', 'Jon', 'Jim');

console.log(queue.size, queue.peek());
const name = queue.dequeue();

console.log(name, queue.size);

queue.enqueue('King');

console.log(queue.toString());
queue.clear();
console.log(queue.size);
