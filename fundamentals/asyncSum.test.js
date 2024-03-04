const sum = async (a, b) => await a + b;
const subtract = async (a, b) => await a - b;

test("sum adds numbers", async () => {
  const result = await sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  const result = await subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

// We no longer need the test file because we have the it on the global object
// Just need to use node --require ./setup-globals.js filename

// async function test(title, callback) {
//   try {
//     await callback();
//     console.log(`✅ ${title}`);
//   } catch (error) {
//     console.error(`❌ ${title}`);
//     console.error(error);
//   }
// }

// function expect(actual) {
//   return {
//     toBe(expected) {
//       if (actual !== expected) {
//         throw new Error(`${actual} is not equal to ${expected}`);
//       }
//     },
//     toBeGreaterThan(expected) {
//       if (actual <= expected) {
//         throw new Error(`${actual} is not greater than ${expected}`);
//       }
//     },
//   };
// }
