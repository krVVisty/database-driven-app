# Database-Driven React App

## Overview

This project is a simple database-driven web application built using **React**, **Express**, and **PostgreSQL** (via **Supabase**). The application allows users to view and create blog posts. Data is stored in a relational database, and the frontend fetches and displays posts dynamically.

The goal of this project was to consolidate my understanding of full-stack development, connecting a React frontend to a backend API, and interacting with a cloud-hosted database.

---

## Features

- Fetch and display all posts from the database using `fetch` and `.map()`.
- Create new posts via a React form.
- Multiple pages using **React Router** (basic setup).
- Database schema creation and seeding with initial data.
- Polling of the backend API every 5 seconds using `useEffect()`.

---

## Tech Stack

- **Frontend:** React, Vite, React Router, fetch API
- **Backend:** Node.js, Express
- **Database:** PostgreSQL via Supabase
- **Deployment:** Render (backend and frontend separate)

---

## Reflection

### Achievements

- Successfully built a full-stack application from scratch.
- Connected React frontend to a live backend deployed on Render.
- Implemented database connectivity using Supabase, including a session pooler.
- Learned how to deploy a React frontend and an Express backend separately in the cloud.
- Handled real-time data updates via polling with `useEffect()`.

### Challenges Encountered

- **Database connectivity issues:** Initially, my backend could not connect to Supabase due to IPv6 address restrictions. Switching to the **Session Pooler (IPv4 compatible)** solved this problem.
- **Environment variables:** Misconfigured URLs in the environment caused connection errors. Learned the importance of maintaining separate `.env` files and variables for frontend and backend.
- **Frontend deployment:** Understanding that React/Vite builds as a static site and requires a separate deployment URL from the backend was a key learning moment.
- **Server vs. frontend distinction:** Initially, opening the backend URL in the browser led to confusion as only JSON data was visible, highlighting the separation between API and frontend rendering.

### Lessons Learned

- The importance of correctly configuring **environment variables** for cloud deployments.
- Understanding the **difference between backend API endpoints and frontend static sites**.
- How to **connect a React app to a remote PostgreSQL database** via a Node.js Express server.
- Best practices for **deploying separate frontend and backend projects** on cloud platforms like Render.
- Real-world experience with **polling for live data updates** in a React application.

---

## Next Steps / Stretch Goals (Optional)

- Add dynamic post pages (`/posts/:id`) using React Router.
- Implement post deletion and like functionality.
- Add categories and filtering of posts.
- Improve styling and responsiveness of the UI.

---

## Deployment URLs

- **Backend (API):** [https://database-driven-app-6ix4.onrender.com](https://database-driven-app-6ix4.onrender.com)
- **Frontend (React App):** _(Insert your deployed frontend URL here)_

---

## Conclusion

This project has been an excellent exercise in full-stack development, from database design and seeding to deploying both backend and frontend in the cloud. Encountering and solving real-world deployment issues has significantly improved my understanding of how web applications function end-to-end.
