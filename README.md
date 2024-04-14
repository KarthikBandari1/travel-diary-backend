
# Travel Diary Platform Backend API

This backend API for a Travel Diary Platform allows users to create, read, update, and delete travel entries. It is built using Node.js, Express.js, and SQLite database, with an emphasis on Object-Oriented Programming (OOP) concepts.

## Table of Contents

1. [Setup and Usage Instruction](#setup-and-usage-instruction)
2. [API Documentation](#api-documentation)
3. [OOP Concepts](#oop-concepts)


## Setup and Usage Instruction

Follow these steps to set up the Travel Diary Platform backend API:

1. **Clone the repository to your local machine:**
   
     ```bash
     git clone https://github.com/your-username/travel-diary-backend.git
   
3. **Install dependencies:**
   
   ```bash
   npm install
   
5. **Start the server:**
   
    ```bash
      npm start
    
The server will start running on http://localhost:3000.


## API Documentation
## User Routes

 ### 1. Register User
- **URL:** `/user/register`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "password": "password123"
  }
- **Success Response:**
   - **Status:** `201 Created`
   - **Response Body:**
  ```json
  {
     "message": "User registered successfully",
     "user": {
        "id": 1,
        "username": "example_user"
       }
  }

- **Error Response:**
   - **Status Code:** `500 Internal Server Error`
   - **Response Body:**
  ```json
   {
     "message": "Failed to register user",
     "error": "Error message"
   }


### 2. Login User
- **URL:** `/user/login`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "password": "password123"
  }
  
- **Success Response:**
   - **Status:** `200 OK`
   - **Response Body:**
  ```json
  {
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }

- **Error Response:**
   - **Status Code:** `401 Unauthorized`
   - **Response Body:**
  ```json
   {
  "message": "Authentication failed"
   }

  
## Dairy Entry Routes
### 1. Create Diary Entry
- **URL:** `/entries`
- **Method:** POST
- **Request Body:**
  ```json
  {
  "title": "Trip to Paris",
  "description": "Visited the Eiffel Tower and enjoyed French cuisine.",
  "date": "2024-04-15",
  "location": "Paris, France",
  "photos": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
  }
- **Headers:**
  ```
  Authorization: Bearer <token>
- **Success Response:**
   - **Status:** `201 Created`
   - **Response Body:**
  ```json
  {
    "message": "Diary entry created successfully",
    "entry": {
       "id": 1,
       "title": "Trip to Paris",
       "description": "Visited the Eiffel Tower and enjoyed French cuisine.",
       "date": "2024-04-15",
       "location": "Paris, France",
       "photos": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
     }
  }
- **Error Response:**
   - **Status Code:** `401 Unauthorized`
   - **Response Body:**
  ```json
   {
  "message": "Authentication failed"
   }

### 2. Gell all Entries
- **URL:** `/entries`
- **Method:** GET
- **Headers:**
  ```
  Authorization: Bearer <token>
- **Success Response:**
   - **Status:** `201 OK`
   - **Response Body:**
  ```json
  [
   {
    "id": 1,
    "title": "Trip to Paris",
    "description": "Visited the Eiffel Tower and enjoyed French cuisine.",
    "date": "2024-04-15",
    "location": "Paris, France",
    "photos": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
   },
   {
    "id": 2,
    "title": "Hiking in the Rockies",
    "description": "Explored scenic trails and breathtaking views.",
    "date": "2024-06-20",
    "location": "Rocky Mountains, USA",
    "photos": ["https://example.com/photo3.jpg"]
    }
  ]
- **Error Response:**
   - **Status Code:** `401 Unauthorized`
   - **Response Body:**
  ```json
   {
  "message": "Authentication failed"
   }
  
### 3. Get Diary Entry by ID
- **URL:** `/entries/:entryId`
- **Method:** GET
- **Headers:**
  ```
  Authorization: Bearer <token>
- **Success Response:**
   - **Status:** `201 OK`
   - **Response Body:**
  ```json
  {
  "id": 1,
  "title": "Trip to Paris",
  "description": "Visited the Eiffel Tower and enjoyed French cuisine.",
  "date": "2024-04-15",
  "location": "Paris, France",
  "photos": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
  }
- **Error Response:**
   - **Status Code:** `401 Unauthorized`
   - **Response Body:**
  ```json
   {
  "message": "Authentication failed"
   }

### 4. Update Diary Entry by ID
- **URL:** `/entries/:entryId`
- **Method:** PUT
- **Request Body:**
  ```json
  {
  "title": "Updated title",
  "description": "Updated description",
  "date": "2024-04-16",
  "location": "Updated location",
  "photos": ["https://example.com/updated-photo1.jpg"]
  }

- **Headers:**
  ```
  Authorization: Bearer <token>
- **Success Response:**
   - **Status:** `201 OK`
   - **Response Body:**
  ```json
  {
  "message": "Diary entry updated successfully",
  "entry": {
    "id": 1,
    "title": "Updated title",
    "description": "Updated description",
    "date": "2024-04-16",
    "location": "Updated location",
    "photos": ["https://example.com/updated-photo1.jpg"]
   }
  }
- **Error Response:**
   - **Status Code:** `401 Unauthorized`
   - **Response Body:**
  ```json
   {
  "message": "Authentication failed"
   }

### 5. Delete Diary Entry by ID
- **URL:** `/entries/:entryId`
- **Method:** DELETE
- **Headers:**
  ```
  Authorization: Bearer <token>
- **Success Response:**
   - **Status:** `201 OK`
   - **Response Body:**
  ```json
  {
  "message": "Diary entry deleted successfully"
  }
- **Error Response:**
   - **Status Code:** `401 Unauthorized`
   - **Response Body:**
  ```json
   {
  "message": "Authentication failed"
   }


## OOP Concepts

- **Encapsulation**: Models encapsulate data and behavior related to users and diary entries. They hide internal implementation details and provide clean interfaces for interacting with data.
- **Modularity**: The codebase is organized into separate modules for models, controllers, routes, and middlewares, promoting modularity and maintainability.
- **Abstraction**: Controllers abstract away the complexity of interacting with the database by providing high-level methods for CRUD operations.
- **Inheritance**: Inheritance is not explicitly used in this project, but it could be applied if there were additional entities or functionalities to be modeled.


  
