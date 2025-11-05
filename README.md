# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# 🎯 Full-Stack Event Management & E-Commerce Web Application

A **fully functional web application** developed using **React**, **PHP (API backend)**, **Tailwind CSS**, and **MySQL**.
This project integrates **event management**, **product sales (POS)**, **chat support**, and **report generation** into one complete system.

---

## ⚙️ Tech Stack

| Layer    | Technology            |
| -------- | --------------------- |
| Frontend | React, Tailwind CSS   |
| Backend  | PHP REST API          |
| Database | MySQL                 |
| Tools    | Vite, Axios, Composer |

---

## 🚀 Core Features

* 🔐 **User Authentication** – secure login and signup with role-based access
* 🛍️ **E-Commerce Module** – add to cart, order, and checkout (Cash on Delivery)
* 💬 **Live Chat System** – real-time communication between users and support team
* 📅 **Event Management** – admins can create, update, and schedule events
* 🧾 **Billing System** – users can view their payment and bill history
* 📊 **Admin Dashboard** – daily, weekly, and monthly sales reports
* 👥 **Role Management** – Admin, User, and Support roles
* 🖼️ **Product Management** – CRUD operations for inventory and events

---

## 🧠 System Overview

### User Roles

| Role        | Description                                 |
| ----------- | ------------------------------------------- |
| **Admin**   | Manage events, products, reports, and users |
| **User**    | Browse events, make orders, view billing    |
| **Support** | Handle live chats and user requests         |

---

## 🛠️ Installation Guide

### 1️⃣ Backend Setup

```bash
cd backend
composer install
cp .env.example .env
# Update database credentials
php -S localhost:8000 -t public
```

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

* The frontend will run at: **[http://localhost:5173/](http://localhost:5173/)**
* Backend API base URL example: `http://localhost/kaizen-backend/api/`

---

## 🖼️ Screenshots

### 🏠 Home Page – Public Site

![Home](src/assets/home.png)

### 🎨 Event Categories

![Categories](src/assets/catagory.png)

### 💬 User Testimonials

![Testimonials](src/assets/showall.png)

### 📅 Event Calendar View

![Calendar](src/assets/sheduleveent.png)

### 🔐 Login & Authentication

![Login](src/assets/login.png)

### 📋 Event Listings (Admin)

![List Events](src/assets/listevent.png)

### ➕ Add Photographer Modal

![Add Photographer](src/assets/addphotographer.png)

### 📊 Admin Dashboard Overview

![Admin Dashboard](src/assets/admindashboard.png)

### 🧑‍💼 About Us (Company Info)

![About](src/assets/about.png)
![About 2](src/assets/about2.png)

---

## 📂 Folder Structure

```
E-Commerce-Web/
 ├── src/
 │   ├── assets/           # Images, icons, static files
 │   ├── components/       # Reusable components (Navbar, Hero, etc.)
 │   ├── pages/            # Page routes (Home, Shop, Login, etc.)
 │   ├── backend/          # PHP API handlers
 │   └── App.jsx
 ├── public/
 ├── package.json
 ├── postcss.config.js
 ├── tailwind.config.js
 └── README.md
```

---

## 📧 Author

**Niven Asmitha Liyanage**
📩 [nivenasmitha345@gmail.com](mailto:nivenasmitha345@gmail.com)

---

## ⭐ Support

If you like this project, don’t forget to **star 🌟 the repo** and share your feedback!

