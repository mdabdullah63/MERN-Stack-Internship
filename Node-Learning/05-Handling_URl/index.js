//  URL Meaning: Uniform Resource Locator

/*

https://www.example.com:443/products/mobile?brand=samsung&color=black&page=2
│     │               │   │                │
│     │               │   │                └── Query Parameters
│     │               │   └─────────────────── Path
│     │               └─────────────────────── Port
│     └─────────────────────────────────────── Hostname (Domain)
└───────────────────────────────────────────── Protocol (Scheme)


https://www.example.com:443/products/mobile?brand=samsung&color=black&page=2\
________________________________________________________________________________________________________________________
| Component               | Example                 | Definition                                                        |
| ----------------------- | ----------------------- | ----------------------------------------------------------------- |
| **Protocol (Scheme)**   | `https`                 | Defines how the browser communicates with the server.             |
| **Hostname (Domain)**   | `www.example.com`       | The address of the website or server.                             |
| **Port**                | `443`                   | Specifies the server's communication port. (HTTP: 80, HTTPS: 443) |
| **Path**                | `/products/mobile`      | Specifies the requested page, file, or API resource.              |
| **Query Parameters**    | `?brand=samsung&page=2` | Sends extra data to the server in **`key=value`** format.         |
| **Fragment (Optional)** | `#reviews`              | Navigates to a specific section of the webpage.                   |
|_______________________________________________________________________________________________________________________|

*/

const http = require('http');
const fs = require('fs');
const url = require('url');
const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  res.setHeader("Content-Type", "text/plain");
  let response;

  /*
  Content-Type is an HTTP response header that tells the browser what type of data the server is sending.

  Based on this value, the browser decides whether to display the data as text, HTML, JSON, CSS, JavaScript, or an image.
  */

  const myurl = url.parse(req.url, true);
  console.log("Parsed URL:", myurl);

  // switch (req.url) {
  switch (myurl.pathname) {

    case "/":
      response = `Hello  this is the home page`;
      break;
    case "/about":
      const username = myurl.query.username || "Guest";
      response = (`Hello i am ${username}`);
      break;
    case "/contact-us":
      response = ("you can contact +91 9876543210");
      break;
    default:
      response = ("404 Not Found");
      res.statusCode = 404;
  }


  const log =
    `${new Date().toISOString()} | ${req.method} | ${req.url} | ${response}\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Failed to write log:", err);
    }
    res.end(response);

  })

})
myserver.listen(8000, () => {
  console.log("Server started on port 8000");
})
