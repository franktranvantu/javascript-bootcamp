// Primitive types:
// 1. string
// 2. number
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol

// Everything else - object

let message = 'hello';
console.log(typeof message);
console.log(typeof 20);
console.log(typeof window);

// 1) Explicit type conversion
// 2) Implicit type conversion

// Explicit
console.log(String(20));
console.log(Boolean(message));
console.log(Number('30'));

// Implicit
console.log('1' * '2');
console.log('10' + '20');