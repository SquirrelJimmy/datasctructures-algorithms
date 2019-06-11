function factorial(start: number): number {
  if (start === 1 || start === 0) return 1;
  if (start < 0) throw new Error('factorial param must >= 0!');
  return start * factorial(start - 1);
}

factorial(4)
