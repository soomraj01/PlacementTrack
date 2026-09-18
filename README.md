# PlacementTrack

A beginner-friendly MERN application for students to track dream companies, applications, interviews, offers, and their résumé.

## Project folders

- `client` — React + Vite frontend
- `server` — Node.js + Express + MongoDB backend

## First-time setup

### 1. Create your MongoDB database

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a free cluster, then choose **Connect > Drivers**.
3. Copy its connection string and replace `<password>` with your database user's password.

### 2. Add your secret settings

Inside `server`, copy `.env.example` and rename the copy to `.env`.

```env
PORT=5000
MONGO_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/placementtrack
JWT_SECRET=put_a_long_random_sentence_here
```

Never upload `.env` to GitHub.

### 3. Install packages

Open two terminals from the project folder.

Terminal 1:

```powershell
cd server
npm install
npm run dev
```

Terminal 2:

```powershell
cd client
npm install
npm run dev
```

Open the localhost URL shown by Vite, usually `http://localhost:5173`.

## API routes

- `POST /api/auth/register` — create account
- `POST /api/auth/login` — log in
- `GET, POST /api/applications` — read/create applications
- `PUT, DELETE /api/applications/:id` — update/delete an application
- `GET /api/applications/stats` — dashboard counts
- `GET, PUT /api/profile` — student profile
- `POST /api/profile/resume` — upload PDF résumé
