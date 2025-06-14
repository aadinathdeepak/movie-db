# 🎬 Movie DB

A simple movie browsing web app built with **React.js**, **Tailwind CSS**, and the **TMDb API**. This project was created as part of my learning journey to understand the fundamentals of modern front-end development using React and REST APIs.

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen?style=for-the-badge)](https://zippy-jalebi-79ccc0.netlify.app)


## 📌 Features

- Browse popular movies from TMDb
- View movie posters and basic details
- Responsive design using Tailwind CSS
- Fetches real-time data using TMDb's REST API

## 🛠️ Technologies Used

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![TMDb API](https://img.shields.io/badge/TMDb%20API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://developer.themoviedb.org/docs)

[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)


## 📁 Project Structure
```text
movie-db/
├── public/
├── src/
├── .env.example          # <- Rename this to .env.local and add your API key
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
```



## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aadinathdeepak/movie-db.git
cd movie-db
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Rename the `.env.example` file to `.env.local`

```bash
mv .env.example .env.local
```

Then, open `.env.local` and update it with your real TMDb API key

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### 4. Run the development server

```bash
npm run dev
```
