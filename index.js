
// <--------------====== FS Module =====---------------->

// let data = require("./app");

// console.log(data.num);
// console.log(data.check())
// console.log(data.arr)


// const fs = require('fs');

// fs.writeFileSync("demo.txt", "Hi, I'm Revanth..!");

// fs.appendFileSync("demo.txt", "I am updated using appendFileSync in FS module...!");

// const buffData = fs.readFileSync("demo.txt", "utf-8");

// const data = buffData.toString();

// console.log(data);

// console.log(buffData);

// fs.renameSync("demo.txt", "Demo.txt");

// fs.unlinkSync("Demo.txt");

// const fs = require('fs');

// fs.writeFileSync("sample.txt", "Hi, I'm Revanth...!");

// const append = fs.appendFileSync("sample.txt", "I'm a FullStack Developer...!");

// console.log(append);

// const data = fs.readFileSync("sample.txt", "utf-8");

// console.log(data);
// const getData = data.toString();

// console.log(getData)

// fs.unlinkSync("sample.txt");

// <----------===== OS Module =====------------>

// const os = require('os');

// console.log(os.arch());

// console.log(os.hostname());

// console.log(os.tmpdir());

// console.log(os.type());

// console.log(os.freemem());

// const freeMomory = `${os.freemem()/1024/1024/1024} GB`

// console.log(freeMomory)


// const totalMomory = `${os.totalmem()/1024/1024/1024} GB`

// console.log(totalMomory);

// <---------------===== Path Module ====-------------------->

// const path = require('path');

// console.log(path.dirname("C:\Users\BUDGET LAPTOP\Desktop\Backend\Practice\index.js"))

// console.log(path.extname("C:\Users\BUDGET LAPTOP\Desktop\Backend\Practice\index.js"))

// console.log(path.basename("C:\Users\BUDGET LAPTOP\Desktop\Backend\Practice\index.js"));

// console.log(path.basename("C:\Users\BUDGET LAPTOP\Desktop\Backend\Practice\index.js"))

// console.log(path.parse("C:\Users\BUDGET LAPTOP\Desktop\Backend\Practice\index.js"))

// const path = require('path');

// const filePath = 'C:/Users/BUDGET LAPTOP/Desktop/Backend/Practice/index.js';

// // Parse the file path
// const parsedPath = path.parse(filePath);

// // Get just the base name (file name with extension)
// const baseName = parsedPath;

// console.log(baseName); // Output: 'index.js'

// // Alternatively, you can use path.basename() directly
// const baseName2 = path.basename(filePath);

// console.log(baseName2); // Output: 'index.js'


// <----------------======== NPM =======-------------------->

// console.log(first);

// const first = 'Hello';

// console.log(first);

// console.log("second")


// <--------------======== Events Module ========------------>

// const EventEmitter = require('events');

// const event = new EventEmitter();

// event.on('sayMyName', () => {
//     console.log('Your name is Revanth...!')
// });

// event.emit('sayMyName');
