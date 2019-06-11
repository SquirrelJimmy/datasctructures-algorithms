
function fibonacciSequence(end: number): number {
  if (end < 1) return 1;
  if (end <= 2) return 1;
  debugger
  return fibonacciSequence(end - 1) + fibonacciSequence(end - 2);
}
// fibonacciSequence(5);

function fibonacciMemoization(position: number): number {
  const mem = [0, 1, 1];
  const fibonacci = (position: number): number => {
    debugger
    if (mem[position] !== undefined) return mem[position];
    return mem[position] = fibonacci(position - 1) + fibonacci(position - 2);
  }
  return fibonacci(position);
}
fibonacciMemoization(5);
