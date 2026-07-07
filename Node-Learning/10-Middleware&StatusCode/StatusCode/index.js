/*
Status Code Categories

HTTP Status Codes 5 Categories me divide hote hain.

1xx Informational
100 Continue → Request receive ho gayi hai, continue karo.
101 Switching Protocols → Server protocol change kar raha hai.
102 Processing → Request process ho rahi hai.


2xx Success
200 OK → Request successfully complete ho gayi.
201 Created → Naya resource successfully create ho gaya.
202 Accepted → Request accept hui, processing baad me hogi.
204 No Content → Request successful hai, lekin response body nahi hai.


3xx Redirection
301 Moved Permanently → Resource permanently naye URL par move ho gaya.
302 Found → Resource temporarily dusri location par hai.
304 Not Modified → Cached data hi latest hai, naya data bhejne ki zarurat nahi.


4xx Client Errors
400 Bad Request → Client ne invalid request bheji hai.
401 Unauthorized → Authentication (login) required hai.
403 Forbidden → Login hai, lekin permission nahi hai.
404 Not Found → Requested resource nahi mila.
405 Method Not Allowed → HTTP method allowed nahi hai.
409 Conflict → Request existing resource se conflict kar rahi hai.
422 Unprocessable Entity → Data valid format me hai, lekin validation fail ho gayi.
429 Too Many Requests → Client bahut zyada requests bhej raha hai.


5xx Server Errors
500 Internal Server Error → Server ke andar unexpected error aa gaya.
501 Not Implemented → Server requested feature support nahi karta.
502 Bad Gateway → Upstream server se invalid response mila.
503 Service Unavailable → Server temporary unavailable ya maintenance me hai.
504 Gateway Timeout → Upstream server ne time par response nahi diya.


*/
