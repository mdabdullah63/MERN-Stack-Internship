const fs =require("fs");
/*
File Handling ka matlab files ko Create, Read, Update aur Delete (CRUD) karna hota hai.

| Method         | Work                  |
| -------------- | --------------------- |
| `writeFile()`  | Create/Overwrite file |
| `readFile()`   | Read file             |
| `appendFile()` | Add data              |
| `unlink()`     | Delete file           |
| `rename()`     | Rename file           |
| `mkdir()`      | Create folder         |
| `readdir()`    | Read folder           |
| `rmdir()`      | Delete folder         |
| `copyFile()`   | Copy file             |
| `stat()`       | File information      |
*/


// Write File

/* FS mean file sysytem
 sync expect two parameter
 fs.writeFileSync(path, data);

synchronous call
fs.writeFileSync("./demo.txt", "Hey how are you");

 Async it take a callback erro and file the path is same than i overwrite the text


 Async expect three parameter
 fs.writeFile(path, data, callback);
*/

//good approch but not batter
// fs.writeFile("./demo.txt", "Hey how are you from Async",(err)=>{})

// fs.writeFile("./demo.txt", "Hey how are you from Async", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("File created successfully.");
// });


//Read File


//Sync expect 2 parameter path & encoding
// const result =fs.readFileSync("./demo.txt","utf-8")
// console.log(result)

//Async expect 3 parameter path, encoding & callback
//Callback function expect 2 parameter error and data


// Async cannot return data because it is asynchronous so we use callback function to get the data

// fs.readFile("./demo.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });


//Append File

// fs.appendFileSync("./demo.txt",new Date().getTime().toLocaleString())

// fs.appendFile("./demo.txt"," Hey how are you from append file\n",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log("Data appended successfully.");
//     }
// });

//unlink() => Delete file

// fs.unlink("./demo1.txt",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log("File deleted successfully.");
//     }
// });

//Stat => File information

fs.stat("./demo.txt",(err,stats)=>{
    if(err){
        console.log(err);
        return;
    }else{
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    }
});
