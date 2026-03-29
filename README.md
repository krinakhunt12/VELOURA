# 🥂 Veloura Gastronomique

**An unparalleled 100% vegetarian fine-dining experience.**

Veloura is a high-end, luxury restaurant web application meticulously designed to offer a cinematic and immersive digital experience. Built with a focus on premium aesthetics, fluid animations, and a modern modular architecture.

---

## ✨ Features

- 🎥 **Cinematic Video Hero**: A breathtaking video-first landing experience with smooth text parallax.
- 🥗 **Exclusively Vegetarian**: A curated menu of 100% vegetarian and plant-based gastronomic delicacies.
- 🎭 **Interactive UI**: Featuring custom cursors, grain overlays, and glassmorphism for a truly luxury feel.
- ⚡ **Seamless Navigation**: Fully functional routing through specialized components for Menu, About, Gallery, and Reservations.
- 🕒 **Real-time Search**: Responsive search and category filtering in the gastronomic menu.
- 📱 **Fully Responsive**: Optimized for every device, from mobile FABs to desktop ultra-wides.

---

## 🏗️ Architectural Overview

The project has been refactored from a monolithic structure to a highly scalable, modular architecture:

-   **`/src/components/ui`**: Reusable low-level atoms (Section, TiltWrapper, CustomCursor).
-   **`/src/components/sections`**: Feature-specific layout components (Hero, About, MenuSection, Footer).
-   **`/src/pages`**: Composite page views (Home, About, Menu, Gallery, Reservations).
-   **`/src/layouts`**: Global page wrappers (MainLayout) that handle shared state and UI persistence.
-   **`/src/routes`**: Centralized routing configuration for easy management.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

---

## 🚀 Getting Started

To run the project locally, ensure you have **Node.js** installed on your machine.

### 1. Clone the repository
```bash
git clone <repository-url>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

---

## 🍽️ Our Philosophy

At Veloura, we believe that fine dining is an art form. Every dish on our exclusively vegetarian menu is a carefully chosen pigment on a canvas of excellence. Led by Executive Chef Julian Vance, we source the finest seasonal ingredients from local artisans to create an unforgettable gastronomic journey that speaks to the soul.

---

© 2026 Veloura Gastronomique. All rights reserved.
