# 🚀 JobHunt Dashboard

A personal **job hunting dashboard** built with **React + Vite + Tailwind CSS v4**.  
Track applications, interviews, schedules, and statistics — all in one place.  
Authentication and synchronization are powered by **Firebase**.

---

## ✨ Features

- **Authentication**
  - Google Sign-In (Firebase Auth)
  - Protected routes with redirect after login
- **Layouts**
  - `PublicLayout` (Home, Login — no sidebar)
  - `AppLayout` (Dashboard & other pages with header + sidebar)
- **Navigation**
  - Dashboard · Applications · Calendar · Stats · Settings
- **UI**
  - Tailwind v4 design tokens (colors, fonts, radius)
  - Responsive sidebar with icons from [lucide-react](https://lucide.dev)

> 🔜 Next up: Applications CRUD (Firestore), Calendar events, Stats (Recharts), Zod validation

---

## ⚡ Tech Stack

- ⚛️ **React 19**
- ⚡ **Vite 7**
- 🎨 **Tailwind CSS v4**
- 🔥 **Firebase** (Auth, Firestore next)
- 🐻 **Zustand 5** (state management)
- 📊 **Recharts**, 📅 **date-fns**, 🖼️ **lucide-react**
