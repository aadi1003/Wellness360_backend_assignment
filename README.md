Wellness360 Backend Assignment

You are tasked with designing and implementing a RESTful API for a task management system. The system should allow users to create, read, update, and delete tasks, as well as mark them as complete.
Requirements: A)
           1. Implement the following API endpoints: - GET /tasks:
           2.  Retrieve all tasks - GET /tasks/{id}: 
           3. Retrieve a specific task by ID - POST /tasks: 
            4. Create a new task - PUT /tasks/{id}: 
           5. Update an existing task - DELETE /tasks/{id}: Delete a task – 
           6. PATCH /tasks/{id}/complete: Mark a task as complete
B). Each task should have the following properties: - id (unique identifier) - title (string) - description (string) - due_date (date) - status (enum: "pending", "in_progress", "completed") - created_at (timestamp) - updated_at (timestamp) 
C). Implement basic error handling and input validation. 
D). Use appropriate HTTP status codes for responses. 
E). Implement at least one unit test for a critical function. 
F). Bonus: Implement basic authentication for the API.
Status: Completed

How to run the Application in your local host?

Step 1: 
Clone the project in your local system by using the command
              Command:- “git clone url”

Step 2: 
In command prompt type “npm install” to install all the     dependencies needed to run the application. It will install all the dependencies on your local host

Step3: 
In command prompt type “npm run dev” to run the application


How to test the Application?

Download the Postman app in your system to test the api
Download the Mongodb compass to see the the database in your system
Open the POSTMAN APP
Open the MongoDB Compass


Note: I had implemented user authentication for api 


PART 1 : User Api

A: Register new User Api:

	In postman app select the POST request
          Enter the url in the url bar
           url = http://localhost:4000/api/auth/register
	In body section select raw, enter the text
		{
    		"username":"abcd2004",
    		"password":"abcd1234"
}
	Click Send
It will generate the response “ User registered Sucessfully” ,& if you double Click on Send with the same credentials it will show in response “User already exist”



B: Login User Api


In postman app select the POST request
          Enter the url in the url bar
           url : http://localhost:4000/api/auth/login
	In body section select raw, enter the text
		{
    		"username":"abcd2004",
    		"password":"abcd1234"
}
Note: Please check you had added the correct username and password which you had used in register user api
	Click Send
It will generate a unique token for you in response ;
Store the token at safe file

Note:- Now check the mongodb compass, the database with name “task by wellness” will appear with the collection name “users”;


PART 2: TASK API
Note: It is necessary to login first , without login you cant work on task api, the access will be denied .

Note: In Task api before sending the request you have to follow the steps for every request
	1: Go to Authorization
          2: In Auth Type from the drop down list , select bearer token ,
                Enter the token value ,which you got after login as a user
You have to performed this authorization step while testing the task api for all the 7 api

A: Create  new Task:
	Request:Post
	url=http://localhost:4000/api/newtask
	In body section select raw, enter the text
		{
    			"title":"Mid Sem Project",
    		"description":"COmplete thje sum number 3 and 4 by today itself",
    			"due_date":"10/03/2004",
    			"status":"pending"
}


Click Send
It will generate the response as newly created task with the field _id,title,description,status,id,createdat,updatedat

Note: You have to use _id in next api where ever it will ask for id

B: Get All Task:
	Request:Get
	url= http://localhost:4000/api/alltasks

	Click Send 
	You will get all the created task in the response

C: Get Specific Task by providing its particular id:
	Request:Get
	url= http://localhost:4000/api/taskbyid/_id
	(replace the _id with the _id of the task you want to search)

	Click Send 
	You will get a single task in response(i.e the task whose id you   
          have provided)
If in case you provide the wrong id , it will give error with the error message

D: Update Task by id:
	Request:Post
	url= http://localhost:4000/api/updatetask/_id	
In body section select raw, enter the text, update as per your need
		{
    			"title":"Mid Sem Project",
    		"description":"COmplete thje sum number 3 and 4 by today itself",
    			"due_date":"10/03/2004",
    			"status":"pending"
}


Click Send
It will generate the response as updated task with the field _id,title,description,status,id,createdat,updatedat

Note: The id ill not change here. so don’t worry !


E: Update Task to in_progress:
	Request: Patch
	url http://localhost:4000/api/task/(_id)/progress

	Click Send 
	The task status will be updated to in-progress

F: Update Task status to completed:
	Request: Patch
	url http://localhost:4000/api/task/(_id)/complete 

	Click Send 
	The task status will be updated to completed


G: Delete Task:
	Request: Delete
	url= http://localhost:4000/api/_id

	Click Send 
The particular task will be deleted successfully, Check the  mongodb compass , from the task collection the task will be deleted

