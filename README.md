# 🏡 Airbnb Clone

A full-stack Airbnb clone built with **React.js**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MongoDB**.  
It provides secure user authentication, property listings, booking management, image uploads, and role-based protected routes for **hosts** and **guests**.

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based authentication)
- ✅ Role-based access (Host / Guest)
- ✅ Add, Update, Delete property listings (Host only)
- ✅ Image uploads via **Cloudinary**
- ✅ Browse and search listings (Guest)
- ✅ Booking system (Create, view, cancel bookings)
- ✅ Protected API routes with JWT
- ✅ Responsive UI with Tailwind CSS
- ✅ MongoDB integration with Mongoose
- ✅ Modular backend architecture (Controllers, Routes, Models)
- ✅ Environment variable support for secure configs

---

## 🛠️ Technologies Used

### **Frontend**
- ⚛️ React.js – Component-based UI library
- 🎨 Tailwind CSS – Utility-first CSS framework
- 🔄 Axios – For API requests
- 🌐 React Router – For navigation

### **Backend**
- 🟢 Node.js – Runtime environment
- 🚏 Express.js – Web framework
- 🍃 MongoDB – NoSQL database
- 📦 Mongoose – ODM for MongoDB
- ☁️ Cloudinary – Image uploads
- 🔑 JSON Web Token (JWT) – Authentication
- 🔒 bcryptjs – Password hashing
- ⚙️ dotenv – Environment configuration
- 📂 Multer – File upload handling

---

## 📁 Directory Structure

```bash
Airbnb_clone/
├── backend/
│   ├── config/
│   │   ├── cloudinary.js        # Cloudinary image upload config
│   │   ├── db.js                # MongoDB connection
│   │   └── token.js             # JWT utilities
│   │
│   ├── controllers/             # Controllers (business logic)
│   │   ├── auth.controller.js
│   │   ├── booking.controller.js
│   │   ├── listing.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware/              # Middlewares
│   │   ├── isAuth.js            # Authentication middleware
│   │   └── multer.js            # File upload middleware
│   │
│   ├── model/                   # Mongoose models
│   │   ├── booking.model.js
│   │   ├── listing.model.js
│   │   └── user.model.js
│   │
│   ├── routes/                  # API routes
│   │   ├── auth.route.js
│   │   ├── booking.route.js
│   │   ├── listing.route.js
│   │   └── user.route.js
│   │
│   ├── public/                  # Static files
│   ├── index.js                 # Backend entry point
│   ├── .env                     # Environment variables
│   ├── .gitignore
│   └── package.json
│
├── frontend/
│   ├── public/                  # Static frontend assets
│   ├── src/
│   │   ├── assets/              # Images, icons, logos
│   │   ├── Component/           # Reusable UI components
│   │   │   ├── Card.jsx
│   │   │   ├── Nav.jsx
│   │   │   └── Star.jsx
│   │   │
│   │   ├── Context/             # React Context API (global state)
│   │   │   ├── AuthContext.jsx
│   │   │   ├── BookingContext.jsx
│   │   │   ├── ListingContext.jsx
│   │   │   └── UserContext.jsx
│   │   │
│   │   ├── data/                # Static or mock data
│   │   │   └── defaultListings.js
│   │   │
│   │   ├── pages/               # Application pages
│   │   │   ├── Booked.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ListingPage1.jsx
│   │   │   ├── ListingPage2.jsx
│   │   │   ├── ListingPage3.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MyBooking.jsx
│   │   │   ├── MyListing.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── ViewCard.jsx
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
│
└── .gitignore

```

## 📌 API Routes

All backend routes are defined under the `backend/routes/` directory and follow RESTful API design.  
Below is the list of available routes and their purposes:

---

### 🔑 Auth Routes (`/api/auth`)
File: `backend/routes/auth.route.js`

| Method | Endpoint   | Middleware | Description          |
|--------|------------|------------|----------------------|
| POST   | `/signup`  | –          | Register a new user. |
| POST   | `/login`   | –          | Login user & return JWT. |
| POST   | `/logout`  | –          | Logout current user (clear token/session). |

---

### 👤 User Routes (`/api/user`)
File: `backend/routes/user.route.js`

| Method | Endpoint        | Middleware | Description          |
|--------|-----------------|------------|----------------------|
| GET    | `/currentuser`  | `isAuth`   | Fetch details of the currently logged-in user. |

---

### 📅 Booking Routes (`/api/booking`)
File: `backend/routes/booking.route.js`

| Method | Endpoint         | Middleware | Description                |
|--------|------------------|------------|----------------------------|
| POST   | `/create/:id`    | `isAuth`   | Create a booking for a listing (by listing ID). |
| DELETE | `/cancel/:id`    | `isAuth`   | Cancel a booking (by booking ID). |

---

### 🏠 Listing Routes (`/api/listing`)
File: `backend/routes/listing.route.js`

| Method | Endpoint               | Middleware | Description |
|--------|------------------------|------------|-------------|
| POST   | `/add`                 | `isAuth`, `multer` | Add a new listing with up to 3 images. |
| GET    | `/get`                 | –          | Get all listings. |
| GET    | `/findlistingbyid/:id` | `isAuth`   | Get a single listing by ID. |
| DELETE | `/delete/:id`          | `isAuth`   | Delete a listing by ID. |
| POST   | `/ratings/:id`         | `isAuth`   | Rate a listing by ID. |
| GET    | `/search`              | –          | Search listings by filters. |
| POST   | `/update/:id`          | `isAuth`, `multer` | Update a listing by ID with new details/images. |

---

✅ **Note:**  
- `isAuth` middleware ensures that only authenticated users can access protected routes.  
- `multer` is used for handling file uploads (images for listings).  
- Routes are prefixed in `index.js` when mounting them, e.g., `/api/auth`, `/api/user`, `/api/booking`, `/api/listing`.

## ⚙️ Environment Variables (`.env`)

Create a `.env` file in the root directory and add the following:

```env
PORT=8000
MONGODB_URL="mongodb+srv://username:password@clustername.mongodb.net/mydatabase?retryWrites=true&w=majority"
JWT_SECRET="your_jwt_secret_key_here"

CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```
---
## 🧰 Setup Instructions
### Clone the repo
```bash
git clone https://github.com/shivshankar8ss/Airbnb_clone.git
cd Airbnb_clone
```
### install dependencies
```bash
npm install
```
### Create .env file
```bash
cp .env.example .env
# then edit values in the .env file
```
### Start the server
```bash
npm run dev   # for development (nodemon)
npm start     # for production

```
---
## 📄 License
This project is open and free to use.  
Useful for learning the basics of CRUD operation in Node.js while learning backend.

## 👨‍💻 Author
**Shivshankar Kumar**  
[Visit my GitHub](https://github.com/shivshankar8ss)

