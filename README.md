![Screenshot 2025-02-19 195525](https://github.com/user-attachments/assets/ae1778e8-28e3-414f-96cc-0242d0f7597a)
# To-Do App Backend

This is the backend service for the **To-Do App**, built using **Node.js** and **Express.js**. It provides a simple REST API to manage tasks.

## 🚀 Features
- **Add Tasks:** A `POST` endpoint to add new tasks.
- **Fetch Tasks:** A `GET` endpoint to retrieve all tasks.

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** (Optional: Can be added later)
- **API Testing:** Postman / Thunder Client

---

## 📌 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/jyothikakokkula3/todo-app-backend.git
cd todo-app-backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Server
```bash
node server.js
```
Or for development:
```bash
npm run dev  # If using nodemon
```

---

## 🔗 API Endpoints

### ➤ Get All Tasks
**Method:** `GET`  
**Endpoint:** `/tasks`  
**Description:** Fetch all tasks stored in the backend.  

#### Example Request:
```bash
curl -X GET http://localhost:5000/tasks
```

#### Example Response:
```json
[
  {
    "id": 1,
    "task": "Learn Node.js"
  },
  {
    "id": 2,
    "task": "Build a To-Do App"
  }
]
```

---

### ➤ Add a New Task
**Method:** `POST`  
**Endpoint:** `/tasks`  
**Description:** Add a new task to the list.  

#### Example Request:
```bash
curl -X POST http://localhost:5000/tasks \
     -H "Content-Type: application/json" \
     -d '{"task": "Complete the project"}'
```

#### Example Response:
```json
{
  "id": 3,
  "task": "Complete the project"
}
```

---

## 📝 License
This project is licensed under the **MIT License**. Feel free to use and modify it as needed.

---

## 📩 Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

---

## 📧 Contact
For any questions or issues, feel free to reach out via [GitHub Issues](https://github.com/jyothikakokkula3/todo-app-backend/issues).


