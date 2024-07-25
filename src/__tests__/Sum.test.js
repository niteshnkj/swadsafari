import sum from '../components/sum'
test("sum function should calculate  sum of two nos", () => {
  const res = sum(3, 4);
  expect(res).toBe(7);
});
