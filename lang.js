console.log("enter number");
function double(num) {
  return 2 * num;
}
ans = double(2);
console.log(ans);
function greet() {
  console.log("hii");
}

setTimeout(greet, 3 * 1000);

function sq(n) {
  return n * n;
}
function cu(n) {
  return n * n * n;
}

function cal(a, fn) {
  return fn(a);
}

an = cal(5, sq);
an2 = cal(5, cu);
console.log(an);
console.log(an2);

function get(data, callback) {
  console.log("wait please");
  setTimeout(() => {
    console.log("done!!");
    callback(data);
  }, 3000);
}

function wong(data) {
  return data;
}

get("hiii", wong);

function cub() {
  console.log("i promise");
  return new Promise(function (resolve) {
    const data = "i am resolved";
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

function onIt(data) {
  console.log(data);
}

cub().then(onIt);

let p = new Promise(function (resolve) {
  resolve("i am resolved with p");
});

p.then(function (data) {
  console.log(data);
});
