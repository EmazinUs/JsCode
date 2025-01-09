function sum(a, b) {
  return a + b;
}
const c = sum(3, 4);
console.log(c);
const d = (p, q) => {
  return p + q;
};
console.log(d(5, 6));
const arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 2;
  console.log(arr[i]);
}
function tentime(i) {
  return i * 10;
}
const arr2 = arr.map(tentime);
console.log(arr2);
