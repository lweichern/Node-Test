// Access file content - asynchronous method to read and write file(execute multiple things at the same time)
// After the first readFile function(order 1) executes, node offloads and carry onto the next task(order 3)

const { readFile, writeFile } = require("fs");

console.log("Start"); // Order 1
readFile("./content/first.txt", "utf-8", (err, result) => {
  // callback function
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log("Done with this task"); // Order 3
      }
    );
  });
});

console.log("Starting next task"); // Order 2
