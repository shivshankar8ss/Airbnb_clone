# Rest Room Booking App

A full-stack Airbnb clone built with **React.js**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MongoDB**.  
It provides secure user authentication, property listings, booking management, and role-based protected routes for **hosts** and **guests**.

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based authentication)
- ✅ Role-based access (Host / Guest)
- ✅ Add, Update, Delete property listings (Host only)
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
- 🔑 JSON Web Token (JWT) – Authentication
- 🔒 bcryptjs – Password hashing
- ⚙️ dotenv – Environment configuration

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
