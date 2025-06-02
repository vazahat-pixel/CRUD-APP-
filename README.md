# 📝 CRUD App with EJS, Node.js, and MongoDB

A simple full-stack CRUD (Create, Read, Update, Delete) application built using:

- **Node.js + Express**
- **MongoDB + Mongoose**
- **EJS Templating**
- **Front-end JavaScript (in a separate file)**

---

## 🚀 Features

- View all users
- Create a new user
- Edit user details
- Delete a user
- Clean UI with EJS
- Client-side JS for interactivity

## 📁 Folder Structure

crud-app/
├── models/
│ └── user.js
├── public/
│ └── js/
│ └── app.js
├── views/
│ ├── read.ejs
│ ├── update.ejs
│ ├── index.ejs
├── script.js
└── package.json

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/vazahat-pixel/crud-app.git
cd crud-app
Install dependencies:

bash
Copy
Edit
npm install
Start MongoDB (ensure MongoDB is running)

Run the application:

bash
Copy
Edit
node app.js
Open your browser:

arduino
Copy
Edit
http://localhost:3000
🌐 Technologies Used
Node.js

Express.js

MongoDB

Mongoose

EJS

HTML, CSS, JavaScript

📬 Routes Overview
Method	Route	Description
GET	/	Show all users
GET	/users/new	Show create form
POST	/users	Create a new user
GET	/users/:id	Show user details
GET	/users/:id/edit	Edit user form
PUT	/users/:id	Update user info
DELETE	/users/:id	Delete a user
