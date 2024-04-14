
# Travel Diary Platform Backend API

This backend API for a Travel Diary Platform allows users to create, read, update, and delete travel entries. It is built using Node.js, Express.js, and SQLite database, with an emphasis on Object-Oriented Programming (OOP) concepts.

## Table of Contents

1. [Setup](#setup)
2. [Usage](#usage)
3. [API Documentation](#api-documentation)
4. [OOP Concepts](#oop-concepts)

## Setup

Follow these steps to set up the Travel Diary Platform backend API:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/travel-diary-backend.git
   cd travel-diary-backend
Install dependencies:

bash
Copy code
npm install
Configure environment variables:
Create a .env file in the root directory and define the following variables:

plaintext
Copy code
PORT=3000
SECRET_KEY=your-secret-key
Start the server:

bash
Copy code
npm start
The API server will start running on port 3000 by default.

Usage
To use the Travel Diary Platform backend API, you can interact with the provided API endpoints using tools like curl, Postman, or any HTTP client library.

Make sure to follow the API documentation below for details on each endpoint and their request/response formats.

API Documentation
User Routes
Register User
URL: /user/register
Method: POST
Request Body:
json
Copy code
{
  "username": "example_user",
  "password": "password123"
}
Response:
Status: 201 Created
Body:
json
Copy code
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "example_user"
  }
}
Login User
URL: /user/login
Method: POST
Request Body:
json
Copy code
{
  "username": "example_user",
  "password": "password123"
}
Response:
Status: 200 OK
Body:
json
Copy code
{
  "message": "Login successful",
  "token": "your-authentication-token"
}
Diary Entry Routes
Get All Entries
URL: /entries
Method: GET
Authorization: Bearer your-authentication-token
Response:
Status: 200 OK
Body:
json
Copy code
[
  {
    "id": 1,
    "title": "My Trip to Paris",
    "description": "Visited famous landmarks such as the Eiffel Tower and the Louvre Museum.",
    "date": "2024-04-14",
    "location": "Paris, France",
    "photos": [
      "https://example.com/photo1.jpg",
      "https://example.com/photo2.jpg"
    ]
  }
]
Create Entry
URL: /entries
Method: POST
Authorization: Bearer your-authentication-token
Request Body:
json
Copy code
{
  "title": "My Trip to Paris",
  "description": "Visited famous landmarks such as the Eiffel Tower and the Louvre Museum.",
  "date": "2024-04-14",
  "location": "Paris, France",
  "photos": [
    "https://example.com/photo1.jpg",
    "https://example.com/photo2.jpg"
  ]
}
Response:
Status: 201 Created
Body:
json
Copy code
{
  "message": "Diary entry created successfully",
  "entry": {
    "id": 1,
    "title": "My Trip to Paris",
    "description": "Visited famous landmarks such as the Eiffel Tower and the Louvre Museum.",
    "date": "2024-04-14",
    "location": "Paris, France",
    "photos": [
      "https://example.com/photo1.jpg",
      "https://example.com/photo2.jpg"
    ]
  }
}
Update Entry
URL: /entries/:entryId
Method: PUT
Authorization: Bearer your-authentication-token
Request Body:
json
Copy code
{
  "title": "Updated Title",
  "description": "Updated description",
  "date": "2024-04-15",
  "location": "New York, USA",
  "photos": [
    "https://example.com/photo3.jpg"
  ]
}
Response:
Status: 200 OK
Body:
json
Copy code
{
  "message": "Diary entry updated successfully",
  "entry": {
    "id": 1,
    "title": "Updated Title",
    "description": "Updated description",
    "date": "2024-04-15",
    "location": "New York, USA",
    "photos": [
      "https://example.com/photo3.jpg"
    ]
  }
}