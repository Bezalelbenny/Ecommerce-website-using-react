# 🛒 E-Commerce Web Application

A full-stack e-commerce web application built using **React, Node.js, Express.js, and MySQL**. The application allows customers to browse products, view product details, and access shopping functionality, while administrators can manage registered users through a dedicated admin control panel.

This project was developed to gain practical experience in React, CRUD operations, client-side routing, API integration, and database management.

## ✨ Features

### 👤 Customer

- User registration and login
- Browse available products
- View individual product details
- Navigate between pages using React Router
- Add products to the cart and access ordering functionality

### 🛡️ Admin Control Panel

- Dedicated admin page
- View registered customers and administrators
- Update existing user information
- Delete registered user accounts
- Manage user records using CRUD operations

### ⚙️ Application Features

- Component-based React architecture
- Dynamic navigation between pages
- API requests using Axios
- Backend integration with Express.js
- MySQL database connectivity
- Separate customer and admin interfaces

## 🛠️ Technologies Used

| Technology   | Purpose                      |
| ------------ | ---------------------------- |
| React        | Frontend development         |
| JavaScript   | Application logic            |
| HTML5        | Page structure               |
| CSS          | Styling and layout           |
| React Router | Client-side navigation       |
| Axios        | HTTP requests to the backend |
| Node.js      | Backend runtime              |
| Express.js   | REST API development         |
| MySQL        | Database management          |

## 📂 Application Overview

The application consists of three main areas:

1. **Login Page** — Allows users to log in or register.
2. **Products and Product Details** — Customers can browse products, view individual product information, and access cart or ordering functionality.
3. **Admin Control Panel** — Administrators can view, update, and delete registered user information.

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://dev.mysql.com/downloads/)
- npm (included with Node.js)

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

Replace the placeholders with your actual GitHub repository URL and project folder name.

### 2. Set up the database

- Start your MySQL server.
- Create the database required by the application.
- Create the necessary tables and columns.
- Configure your database connection in the backend.

### 3. Start the backend

Open a terminal in your backend folder and run:

```bash
npm install express cors sql2
```

Start the server using the command configured in your project, for example:

```bash
node server.js
```

Replace `server.js` if your backend entry file has a different name.

### 4. Start the React frontend

Open another terminal in your frontend folder and run:

```bash
npm install 
npm install axios
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## 📚 Learning Outcomes

Through this project, I practised:

- Building reusable React components
- Managing form inputs using React state
- Implementing navigation with React Router
- Sending HTTP requests using Axios
- Connecting a frontend application to an Express backend
- Performing CRUD operations with MySQL
- Managing separate admin and customer interfaces
- Understanding the fundamentals of full-stack web development

## 🔮 Future Enhancements

- Secure authentication and role-based authorization
- Improved shopping cart management
- Order history and order tracking
- Product search, filtering, and sorting
- Responsive design for mobile devices
- Product inventory management
- Online payment integration

## 👨‍💻 Author

**Bezalel Benny**

BCA Student | Aspiring Full-Stack Developer

---

⭐ If you find this project interesting, feel free to explore the repository and follow my development journey!
