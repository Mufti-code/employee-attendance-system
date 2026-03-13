# Employee Attendance System

A simple **Employee Attendance System** built using **Node.js, Express, and SQLite**.
This application allows employees to check in and view attendance records through a simple web interface.

---

## 🚀 Live Demo

https://employee-attendance-system-production-bdf4.up.railway.app

---

## 📌 Features

* Employee **Check-In system**
* Store attendance data in **SQLite database**
* **REST API** for attendance records
* Simple **web interface**
* **Automatic database creation**
* **Cloud deployment support**

---

## 🛠 Tech Stack

Backend:

* Node.js
* Express.js

Database:

* SQLite

Frontend:

* HTML
* CSS
* JavaScript

Deployment:

* Railway

---

## 📂 Project Structure

```
employee-attendance-system
│
├── server.js
├── package.json
├── database.db
│
└── public
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/Mufti-code/employee-attendance-system.git
```

Open the project folder:

```
cd employee-attendance-system
```

Install dependencies:

```
npm install
```

Start the server:

```
npm start
```

Server will run on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### Check-In

```
POST /checkin
```

Request Body:

```
{
 "name": "Employee Name"
}
```

Response:

```
{
 "message": "Check-in berhasil"
}
```

---

### Get Attendance Records

```
GET /attendance
```

Response:

```
[
 {
  "id": 1,
  "name": "John",
  "checkin": "2026-03-13",
  "checkout": null
 }
]
```

---

## 🌐 Deployment

This project is deployed using **Railway**.

Steps:

1. Push project to GitHub
2. Connect repository to Railway
3. Deploy automatically
4. Generate public domain

---

## 📈 Future Improvements

* Admin login system
* Employee dashboard
* Attendance analytics
* Export attendance data (CSV / Excel)
* Employee profile with photo
* Dark mode UI

---

## 👨‍💻 Author

Maulana Al Mufti

GitHub:
https://github.com/Mufti-code

---

## 📜 License

This project is licensed under the **MIT License**.
