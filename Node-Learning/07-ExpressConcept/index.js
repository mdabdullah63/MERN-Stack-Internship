
/*
What is Express.js?

Express.js is a fast, lightweight, and minimal web framework for Node.js
used to build web applications and REST APIs easily.

Why do we use Express.js?

- Reduces boilerplate code.
- Makes routing simple.
- Handles HTTP methods easily.
- Supports middleware.
- Makes API development faster and cleaner.

What problem does Express.js solve?

Without Express:
- Manual routing using if-else or switch.
- Manual request and response handling.
- More repetitive code.
- Hard to manage large applications.

With Express:
- Simple routing (app.get(), app.post(), etc.)
- Easy request and response handling.
- Built-in middleware support.
- Clean, readable, and maintainable code.
*/

/*
Common Express Methods

app.get()     -> Read data
app.post()    -> Create data
app.put()     -> Replace data
app.patch()   -> Update specific fields
app.delete()  -> Delete data
*/


/*
Definition
Express.js is a lightweight web framework for Node.js that simplifies
routing, middleware, request/response handling, and REST API development,
making web applications faster and easier to build.
*/

// const http= require("http") no neededin express
const express = require("express")
const app = express();


app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/about", (req, res) => {

    // Query parameters are optional values sent in the URL after '?'.
    // Example: /about?name=Abdullah&age=21
    res.send(`Hey ${req.query.name}, you are ${req.query.age} years old.`);
});

app.get("/contact", (req, res) => {
    res.send("Contact");
});

app.post("/contact", (req, res) => {
    res.send("Contact");
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

/*
Traditional Node.js Approach
const http = require("http");
const server = http.createServer(app);
server.listen(8000);

Not required because app.listen() internally
creates and starts the HTTP server.
*/
