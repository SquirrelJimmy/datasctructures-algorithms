import { Queue } from ".";
import { Dequeue } from "./dequeue";

const queue = new Queue<string>();
const dequeue = new Dequeue<string>();


// queue.enqueue('Alice', 'Mike', 'Jon', 'Jim');

// console.log(queue.size, queue.peek());
// const name = queue.dequeue();

// console.log(name, queue.size);

// queue.enqueue('King');

// console.log(queue.toString());
// queue.clear();
// console.log(queue.size);

dequeue.addFront('Alice', 'Mike', 'Jon', 'Jim');
dequeue.addFront('Pink', 'Youk', 'Lissa', 'Sassa');
console.log(dequeue.toString());
dequeue.addEnd('Mili', 'Eszel')
console.log(dequeue.toString());
dequeue.removeEnd();
console.log(dequeue.toString());
dequeue.removeFront();
dequeue.removeFront();
dequeue.removeFront();
dequeue.removeFront();
dequeue.addFront('Alice', 'Mike', 'Jon');
console.log(dequeue.toString());
dequeue.addEnd('Jim', 'Jack', 'Dark')
console.log(dequeue.toString());
dequeue.removeFront();
dequeue.removeEnd();
dequeue.removeEnd();
console.log(dequeue.toString(), dequeue.size);
console.log(dequeue.peekFront(), dequeue.peekEnd());
