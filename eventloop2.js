const fs = require("fs");
const https = require("node:https");
const a = 10;
setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(() => {
  console.log("promise");
});

fs.readFile("text2.txt", "utf8", (err, data) => {
  console.log("file1 read", err, data);
});

fs.readFile("text.txt", "utf8", (err, data) => {
  console.log("file2 read", err, data);
});

setTimeout(() => {
  console.log("setTimeout");
}, 9.0);

function printA() {
  console.log("a->", a);
}

process.nextTick(() => {
  console.log("process");
});

printA();
console.log("last line of a file");
