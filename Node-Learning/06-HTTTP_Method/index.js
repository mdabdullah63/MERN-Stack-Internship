// HTTP Method are

/*
GET    → Read data
POST   → Create data
PUT    → Replace entire data
PATCH  → Update specific fields
DELETE → Delete data

*/

const http = require("http");

const server = http.createServer((req, res) => {

  let response;


  switch (myurl.pathname) {
    case "/":
      if(req.method==="GET") response = `Hello this is home page`;
      break;
    case "/about":
      const username = myurl.query.username || "Guest";
      response = (`Hello i am ${username}`);
      break;
    case "/contact-us":
      response = ("you can contact +91 9876543210");
      break;
      case "/signup":
        if(req.method==="GET")      response = ("this is signup page");
        // database ke pe query kar ke routing kar sakte hai 
        else if (req.method === "POST")  response = ("Success login");
        res.statusCode=200;
        break

    default:
      response = ("404 Not Found");
      res.statusCode = 404;
  }


  res.end(response);
});

server.listen(8000, () => {
  console.log("Server started on port 8000");
});
