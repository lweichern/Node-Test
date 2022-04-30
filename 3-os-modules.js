// built-in module doesn't need to npm install anything, unlike external module
const os = require("os");

// info about current user
const user = os.userInfo();

// method to return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()}sec`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
