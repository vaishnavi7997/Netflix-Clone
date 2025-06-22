# Netflix Clone - React + Vite

A fully responsive Netflix clone built using **React**, **Vite**, and **Firebase**, with dynamic movie data powered by **TMDB API**. This project mimics the core features of Netflix including home page UI, login/registration, movie trailers, and responsive design.

---

## 🚀 Features

* ✅ Home Page with hero banner and trending movies
* ✅ Live movie data fetched from TMDB API
* ✅ Auto-playing hero carousel
* ✅ In-page YouTube trailer popup
* ✅ Login and Registration using Firebase
* ✅ Loading animation on login page
* ✅ Responsive design for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

* **React** (with Hooks)
* **Vite** (for lightning-fast dev/build)
* **Firebase** (Authentication)
* **TMDB API** (Movie Data)
* **CSS** (Custom + Flexbox/Grid)

---

## 📦 Folder Structure

```
├── public/
├── src/
│   ├── assets/              # Static images/icons
│   ├── components/          # Navbar, Footer, Carousels, etc.
│   ├── pages/               # Home, Login, Player pages
│   ├── firebase.js          # Firebase config
│   ├── App.jsx
│   ├── main.jsx
├── .env                    
├── .gitignore
├── package.json
├── vite.config.js
```

---

## 🧪 Project Setup (Step by Step)

### 1. **Setup React Project**

```bash
npm create vite@latest netflix-clone -- --template react
cd netflix-clone
npm install
```

### 2. **Install Dependencies**

```bash
npm install react-router-dom firebase
```

### 3. **Create Home Page**

* Design hero section
* Add navigation bar and footer
* Use TMDB API to fetch trending movies
* Implement auto-slide and carousel controls

### 4. **Create Login Page**

* Add simple form UI with email/password fields
* Setup Firebase Auth
* Add loading animation during login

### 5. **Firebase Login & Register Setup**

* Go to [Firebase Console](https://console.firebase.google.com/)
* Create project and enable Email/Password authentication
* Add Firebase config in `firebase.js`

```js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = { /* your config */ };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

### 6. **Display Movie Data from TMDB API**

* Sign up on [https://www.themoviedb.org](https://www.themoviedb.org)
* Get API key and access token
* Store it in `.env`:

```env
VITE_TMDB_KEY=your_key_here
```

* Fetch using fetch/axios:

```js
fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_KEY}`)
```

### 7. **Create Video Player Page**

* When clicking play, fetch movie trailer from TMDB
* Use YouTube embed iframe to show the video popup

### 8. **Create Loading Animation on Login**

* Add loading spinner during auth request

```js
{loading && <div className="loader"></div>}
```

### 9. **Make the Website Responsive**

* Use `flex-wrap`, `media queries`, and `grid`
* Ensure layout adjusts on mobile, tablet, and large screens

---

## 🌐 Live Demo

Add Netlify/Vercel: [https://netflix-clone-eta-tan.vercel.app/login]


---

## 📄 License

This project is for educational purposes only.

---

## 🙋‍♀️ Author

**Vaishnavi**
[LinkedIn](https://www.linkedin.com/in/vaishnavi7997) | [GitHub](https://github.com/vaishnavi7997)

---

Feel free to ⭐ star the repo and fork if you found it useful!
