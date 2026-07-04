const http = require("http");
const fs = require("fs")

// iska module use kar rahe haia operating system ke information ke liyeD
// const os = require('os');
// console.log('Operating System Info:' + os.cpus().length + ' cores');

//server create ho raha haia aur callback daire kar raha request and respose ka
const myserver = http.createServer((req, res) => {
  let response;
  //yaha pe switch case use kar rahe haia url ke liye
  switch (req.url) {
    case "/":
      response = "Hello this is home page";
      break;

    case "/about":
      response = "Hello i am md abdullah";
      break;

    case "/contact-us":
      response = "you can contact +91 9876543210";
      break;

    default:
      response = "404 Not Found";
  }
  //log variable me date, url and response store kar rahe haia
  const log = `${Date.now()} ${req.url} ${response}\n`;

  //appendFile method use kar rahe haia log.txt file me data append karne ke liye
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    }
    //agar error nahi hai to response send kar rahe haia
    res.end(response);
  });
})
//server listen kar raha haia port 8000 pe aur callback function me message print kar rahe haia
myserver.listen(8000, () => {
  console.log("My server is start")
})

// const MyServ = http.createServer((req, res) => {
//   const log = `${Date.now()}:${req.url} New Req recived\n`
//   fs.appendFile("log.txt", log, (err, data) => {
//     if (err) {
//       console.log("err")
//     } else {
//       // console.log(req.headers)
//       //headers extra information about server in object form
//    switch (req.url) {
//   case "/":
//     res.end("Hello this is home page");
//     break;

//   case "/about":
//     res.end("Hello i am md abdullah");
//     break;

//   case "/contact-us":
//     res.end("you can contact +91 9876543210");
//     break;

//   default:
//     res.end("404 Not Found");
// }
//   }
//   })
// });

// MyServ.listen(8000, () => {
//   console.log("server start")

// }
// )

