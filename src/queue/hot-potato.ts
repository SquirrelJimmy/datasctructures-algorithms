import { Queue } from ".";


function hotPotato<T>(elements: T[], num: number) {
  const queue = new Queue<T>();
  const elimitatedList: T[] = [];
  queue.enqueue(...elements);
  while (queue.size > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(<T>queue.dequeue())
    }
    elimitatedList.push(<T>queue.dequeue());
  }
  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  }
}


const result = hotPotato(['Jim', 'Lissa', 'Lucy', 'Jone', 'Jack'], 11);

result.eliminated.map(item => console.log(`${item}被淘汰`));
console.log(`胜利者是: ${result.winner}`);
