# Note App Backend

This is the backend for the Note App, built with Node.js, Express, and MongoDB. It provides RESTful APIs for user authentication and note management.

## Main Routes & APIs

### Authentication

- **POST `/create-account`**  
  Registers a new user.  
  **Body:**

  ```json
  { "fullName": "string", "email": "string", "password": "string" }
  ```

- **POST `/login`**  
  Logs in an existing user.  
  **Body:**
  ```json
  { "email": "string", "password": "string" }
  ```

### User

- **GET `/get-user`**  
  Gets the current user's info.  
  **Headers:**  
  `Authorization: Bearer <token>`

### Notes

- **POST `/add-note`**  
  Adds a new note.  
  **Body:**

  ```json
  { "title": "string", "content": "string", "tags": ["string"] }
  ```

  **Headers:**  
  `Authorization: Bearer <token>`

- **PUT `/edit-note/:noteId`**  
  Edits an existing note.  
  **Body:**

  ```json
  {
    "title": "string",
    "content": "string",
    "tags": ["string"],
    "isPinned": true
  }
  ```

  **Headers:**  
  `Authorization: Bearer <token>`

- **GET `/get-all-notes`**  
  Retrieves all notes for the user.  
  **Headers:**  
  `Authorization: Bearer <token>`

- **DELETE `/delete-note/:noteId`**  
  Deletes a note.  
  **Headers:**  
  `Authorization: Bearer <token>`

- **PUT `/update-note-pinned/:noteId`**  
  Pins or unpins a note.  
  **Body:**

  ```json
  { "isPinned": true }
  ```

  **Headers:**  
  `Authorization: Bearer <token>`

- **GET `/search-note/?query=...`**  
  Searches notes by title or content.  
  **Headers:**  
  `Authorization: Bearer <token>`

## Project Structure

- Models: [`models/note.model.js`](models/note.model.js), [`models/user.model.js`](models/user.model.js)
- Main server: [`index.js`](index.js)
- Utilities: [`utilities.js`](utilities.js)

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set up your `.env` file with `ACCESS_TOKEN_SECRET`.
3. Start the server:
   ```sh
   node index.js
   ```

# Note App Frontend

This is the frontend for the Note App built with React and Vite. It allows users to sign up, log in, and manage their notes with features like add, edit, delete, pin, and search.

## Routes

| Path         | Component | Description            |
| ------------ | --------- | ---------------------- |
| `/login`     | `Login`   | User login page        |
| `/signup`    | `Signup`  | User registration page |
| `/dashboard` | `Home`    | Main notes dashboard   |

## APIs

All API requests use the base URL defined in [`BASE_URL`](src/utils/constants.js):

```
http://localhost:8000
```

### Authentication

- **POST `/create-account`**  
  Registers a new user.  
  **Body:** `{ fullName, email, password }`

- **POST `/login`**  
  Logs in an existing user.  
  **Body:** `{ email, password }`

### User

- **GET `/get-user`**  
  Gets the current user's info.  
  **Headers:** `Authorization: Bearer <token>`

### Notes

- **POST `/add-note`**  
  Adds a new note.  
  **Body:** `{ title, content, tags }`  
  **Headers:** `Authorization: Bearer <token>`

- **PUT `/edit-note/:noteId`**  
  Edits an existing note.  
  **Body:** `{ title, content, tags }`  
  **Headers:** `Authorization: Bearer <token>`

- **GET `/get-all-notes`**  
  Retrieves all notes for the user.  
  **Headers:** `Authorization: Bearer <token>`

- **DELETE `/delete-note/:noteId`**  
  Deletes a note.  
  **Headers:** `Authorization: Bearer <token>`

- **PUT `/update-note-pinned/:noteId`**  
  Pins or unpins a note.  
  **Body:** `{ isPinned }`  
  **Headers:** `Authorization: Bearer <token>`

- **GET `/search-note/?query=...`**  
  Searches notes by title or content.  
  **Headers:** `Authorization: Bearer <token>`

## Project Structure

- Components: [`src/components`](src/components)
- Pages: [`src/pages`](src/pages)
- Utilities: [`src/utils`](src/utils)

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
<p><strong>🔗 Live demo: <a href="https://notes-app-1-vvgp.onrender.com">Notes_App</a></strong></p>

## License
