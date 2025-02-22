function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result1 = addSafe(5, 10); // Returns 15
const result2 = addSafe("hello", 5); // Throws an error

const result3 = add(5,10); // Returns 15