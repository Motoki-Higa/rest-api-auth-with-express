# Rest api authentication with express

This is a backend (REST) only app to experiment authentication with express.
No database is used, so registered users will be stored in javascript array for the project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- [Node.js](https://nodejs.org/en/download/)
- [Npm](https://www.npmjs.com/get-npm)
- [Nodemon](https://www.npmjs.com/package/nodemon)

### Built with

#### Main

- [Express.js](https://www.npmjs.com/package/express) - Backend

#### Key packages

- [express-validator](https://www.npmjs.com/package/express-validator)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [basic-auth](https://www.npmjs.com/package/basic-auth)

### Installing a project

Clone a project to your local (cd /your_directory)

```
git clone https://github.com/Motoki-Higa/rest-api-auth-with-express.git
```

To install dependencies, run this in the application folder from the command-line:

```
npm install
```

### Start a project

cd into the installed project folder. Then run below.

```
nodemon
```

### Test a protected route

Open Postman and complete the following steps:

__Register a user__
(This is necessary to do as the app doesn't retain persisted data between application restarts).

1. Select the "POST" HTTP method in the drop down list to the left of the URL field.

2. Change the URL to "http://localhost:5000/api/users".

3. Switch to the "Body" tab, and select "raw" and "JSON (application/json) for the body format.

4. Provide the following body content:

    ```
    {
    "name": "Joe Smith",
    "username": "joe@smith.com",
    "password": "joepassword"
    }
    ```

5. Click the "Send" button to register the user.

__login as registered user__

1. Now select the "GET" HTTP method in the drop down list to the left of the URL field.

2. Use the same URL: "http://localhost:5000/api/users".

3. Switch to the "Authorization" tab, and select "Basic Auth" for the "TYPE", and provide the username and password for the user account that you added in step above.

4. Click the "Send" button.

If everything is setup correctly, the request will succeed and you'll receive a 200 OK HTTP status code back from the server along with the current authenticated user's information (formatted as JSON) in the response body.

Changing the authorization type (in the "Authorization" tab) to "No Auth" and clicking the "Send" button again, should result in a 401 Unauthorized HTTP status code from the server.