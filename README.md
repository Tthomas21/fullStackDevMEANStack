# cs465-fullStackDev1
CS - 465 Fullstack development with MEAN


Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

The frontend development I used in this full stack project involved the angular CLI to generate components for the user to interact with on the singple-page application (SPA) webpage. Each component used HTML to display things such as a login page, and pages for creating & updating trip information. JavaScript was used to handle the data being passed between the SPA and backend API. Since we are using the MEAN stack, JavaScript is the main programming language used through the entire application. JSON or JavaScript Object Notation is the JavaScript way of holding data. MongoDB stores data in BSON or Binary JSON, which is perfect for the application that primarily and only uses JavaScript.


Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is syntactically identical to Javascript, JSON has few data types than Javascript. JSON helps ties together front and backend development because Javascript is the primary application language, this allows data to be easily transfered throughout the application and stored in the MongoDB. JSON was used to turn static HTML webpages into dyanamic JSON, this allowed the pages to be updated with information from the API which interacted with the databse to retrieve and store infroamtion.



Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Since we used a RESTful API which uses the HTTP protocol to handle request and response via the web, we impleted methods for GET, PUT, POST, and DELETE. These methods model CRUD actions in our MongoDB for retrieving, storing, upddating, and deleting information. These methods are often develop at API endpoints, for excample, the add-trip endpoint has a body http://localhost:4200/add-trip, this endpoint is used to interact with the POST method which takes information inputted by the user and stores it in the databse. Additional, we added security methods for authorizing a user and generating a JSON webtoken. This security layer was used to ensure that only authorized users could perform certain actions such as updating or deleting information. In order to perform these actions, a user was verified by first creating login credentials, these login credentials generated a JSON webtoken when the user logged in which was then passed in as a bearer token in the request header for the POST and PUT methods.

Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course helped me in reaching my professional goals by giving me a good understanding of developing a fullstack application with use the of revelant technologies like the MEAN stack. I will need to continue to build upoing this knowledge in order to master these skills but I believe I have a strong understanding of RESTful APIs, HTML, CSS, Security Algorithms, Javascript and JSON, MongoDB. I think being able to develop applications using an entire technology stack is a marketable skills in and of itself and will make me more marketable in my career field as a software engineer.
