# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

  Your answer: outside
  Researched answer:undefined; 


1b. Test the function. Explain why the function returned what it did.

  Your answer:
  if remove the keyword "var" before text = 'inside' inside the function, 
  it will print the global var which is 'outside'
  It seems that the "var" keyword is causing the scoping problem;

  Researched answer:
  This is a result of "variable hoisting" (https://scotch.io/tutorials/understanding-hoisting-in-javascript);
  No matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
  This means the variable can be used without referencing error if they are declared in the scope.
  If it is used before the declaration statement, it will give undefined;
  one the declaration happens, the variable will be assigned to their declared values.


2. What is JSON?

  Your answer:
  Javascript Object Notation... 
  It stores the data content?

  Researched answer:
  JSON stands for Javascript Object Notation.
  It is a lightweight format for storing and transporting data.
  It's often used when data is sent from a server to a web page.
  JSON is basically a way of communicating data to someone, with very, very specific rules. Using Key Value Pairs and Arrays (serialized data).


3. What does CRUD stand for?

  Your answer: Create, Return, U..., Delete

  Researched answer
  Create, Read, Update, and Delete (https://www.codecademy.com/articles/what-is-crud);
  
  The CRUD cycle describes the elemental functions of a persistent database, and it's the heart of most dynamic websites as we want them to be able to Create, Read, Update, and Delete resources.
  
  It provides a memorable framework for reminding developers of how to construct full, usable models.

4. What are the 5 HTTP verbs?

  Your answer: ...

  Researched answer:
  POST (Create), GET (Read), PUT (Update), PATCH (Update), DELETE (Delete);
  
  Post: 
    The POST verb is most-often utilized to **create** new resources. In particular, it's used to create subordinate resources. That is, subordinate to some other (e.g. parent) resource. In other words, when creating a new resource, POST to the parent and the service takes care of associating the new resource with the parent, assigning an ID (new resource URI), etc.
    
    On successful creation, return HTTP status 201, returning a Location header with a link to the newly-created resource with the 201 HTTP status.
    
  Get: 
    The HTTP GET method is used to **read** (or retrieve) a representation of a resource. In the “happy” (or non-error) path, GET returns a representation in XML or JSON and an HTTP response code of 200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).
    
    According to the design of the HTTP specification, GET (along with HEAD) requests are used only to read data and not change it. Therefore, when used this way, they are considered safe. That is, they can be called without risk of data modification or corruption—calling it once has the same effect as calling it 10 times, or none at all. Additionally, GET (and HEAD) is idempotent, which means that making multiple identical requests ends up having the same result as a single request.
    
  Put:
    PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource.
    
    However, PUT can also be used to create a resource in the case where the resource ID is chosen by the client instead of by the server. In other words, if the PUT is to a URI that contains the value of a non-existent resource ID. Again, the request body contains a resource representation. Many feel this is convoluted and confusing. Consequently, this method of creation should be used sparingly, if at all.
    
  Patch:
    PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource.
    
    This resembles PUT, but the body contains a set of instructions describing how a resource currently residing on the server should be modified to produce a new version. This means that the PATCH body should not just be a modified part of the resource, but in some kind of patch language like JSON Patch or XML Patch.

  Delete:
    DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.
    
    On successful deletion, return HTTP status 200 (OK) along with a response body, perhaps the representation of the deleted item (often demands too much bandwidth), or a wrapped response (see Return Values below). Either that or return HTTP status 204 (NO CONTENT) with no response body. In other words, a 204 status with no body, or the JSEND-style response and HTTP status 200 are the recommended responses.

5. What is a higher-order function?

  Your answer:
  A function that takes in (call-back) function(s) as argument(s) or return function(s).
  
  Examples are .map() where it takes a call back function

  Researched answer:
  A higher order function is a function that takes a function as an argument, or returns a function. Higher order function is in contrast to first order functions, which don’t take a function as an argument or return a function as output.


6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer: Haven't heard about it yet. 

  Researched answer:
  Closures are inner functions inside of an outer function. They have their own local scope and has access to outer function's scope, parameters (but not arguments object), and they also have access to global variables.
  
  It is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In Javascript, closures are created every time a function is created, at function creation time. 
  
  The inner function will have access to the variables in the outer function scopre, even after the outer function has returned.
  
  (https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36).


7. STRETCH: What is an API?

  Your answer: API stands for application programming interface (?). It is used for computers to communucate with each other. 

  Researched answer:
  Application Programming Interface (API);
  It is an interface or communication protocol between a client and a server intended to simplify the building of client-side software.
  
  It is part of the server that receives requests and sends responess. It has been described as a "contract" between the client and the server, such that if the client makes a request in a specific format, it will always get a response in a specific format or initiate a defined action. 
  
  In building apps, an API simplifies programming by abstracting the underlying implementation and only exposing objects ar actions the developer needs. An API for file input/output might give the developer a function that copies a file from one location to another without requiring that the developer understand the file system operations occuring behind the scenes. 
  
  Examples are google map, youtube, Facebook

### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?

  Favorite way to spend weekends.

2. What was your favorite topic this week?
  
  Learning how the internet work and understanding terminologies such as framework, library, and languages. I also enjoyed learning React.


3. What was your "A-ha!" moment this week?
  
  1. A good practice when coding is to hard code functionality to test if it works and add dynamic functions in. Using console.log() to see the intermediate results can help a lot!
  2. when returning template literals, we need to put () around `template literal` 
  3. React requires closing tags and you can't have space and content between <img></img> for example.
  4. use {} to signify JS in react
  5. constructor and super() of the child objects calls the constructor of the parent, which is why the child can grab the properties from the parent. 
  6. state can get really messy in react, so the best practice is to have components without state (i.e. dumb components)!