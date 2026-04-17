# Modern Real Estate Full-Stack Website

A full-stack real estate web app with:

- **Frontend:** Next.js + Tailwind CSS + Framer Motion
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **API style:** REST

## Project Structure

```
.
├── frontend
│   ├── app
│   ├── components
│   ├── lib
│   └── package.json
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
└── README.md
```

## Features Implemented

- Modern responsive UI with premium styling
- Smooth scrolling and motion animations
- Animated property cards, buttons, and route transitions
- Pages:
  - Home
  - Property listing
  - Property details
  - Contact / Query form
- Navbar + footer
- Loading states and error handling on form submit
- Backend REST endpoints:
  - `POST /api/enquiries`
  - `GET /api/enquiries`
- MongoDB schema with validation
- Frontend + backend form validation

## Setup Instructions

## 1) Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Update `.env` if needed:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/real-estate-app
FRONTEND_URL=http://localhost:3000
```

Run backend:

```bash
npm run dev
```

Backend runs at `http://localhost:5000`.

## 2) Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
```

Frontend env:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Run frontend:

```bash
npm run dev
```

Frontend runs at `http://localhost:3000`.

## API Endpoints

### POST `/api/enquiries`
Saves an enquiry.

**Sample body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@email.com",
  "contactNumber": "+1 555 982 0041",
  "message": "I am interested in the skyline penthouse listing."
}
```

### GET `/api/enquiries`
Fetches all enquiries (admin use).

## Notes

- Ensure MongoDB is running locally or use a cloud MongoDB URI.
- CORS is configured to allow the frontend URL configured in backend `.env`.
