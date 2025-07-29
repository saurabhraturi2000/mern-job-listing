# MER Job Listing

A full-stack job listing application built with:

- **Frontend**: React + TypeScript + Vite + React Query
- **Backend**: Node.js + Express + MongoDB

---

## 📁 Project Structure

```
mer-job-listing/
├── client/         # React frontend
├── server/         # Express backend
└── README.md
```

---

## 🔧 Environment Setup

### 1. Clone the Repo

```bash
git clone https://github.com/saurabhraturi2000/mern-job-listing.git
cd mer-job-listing
```

---

### 2. Setup Environment Variables

#### ➤ `client/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

#### ➤ `server/.env`

```env
PORT=5000
NODE_ENV=development
MONGO_URI= Your Mongo DB URI
```

---

## 🚀 Running the Project

Make sure you have Node.js installed (v18 or later recommended).

Install dependencies and start both client and server:

```bash
npm install
npm run dev
```

This will concurrently start:

- **Client** on [http://localhost:5173](http://localhost:5173)
- **Server** on [http://localhost:5000](http://localhost:5000)

> The client will automatically use `VITE_API_URL` to communicate with the backend.

---

## 💡 Features

- Job listing page (view all jobs)
- Add new job form
- React Query for data fetching
- MongoDB for storing jobs
- Express REST API with CORS enabled

---

## 📂 Folder Breakdown

### `client/`

- React + TypeScript project
- Uses React Query + Axios
- Environment variable: `VITE_API_URL`

### `server/`

- Express API server
- Connects to MongoDB via Mongoose
- Exposes `/api/jobs` endpoints

---

## 🛠 Scripts

From individual folders:

```bash
# Client
cd client
npm run dev

# Server
cd server
npm run dev
```

---

## 📜 License

MIT © Saurabh Raturi
