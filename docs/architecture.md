# Project Architecture

This document provides a high-level overview of the Amazon Clone project's architecture.

## 📁 Directory Structure

- `src/components`: UI components (Navbar, Sidebar, ProductCard, etc.).
- `src/pages`: Page components representing different routes (Home, Checkout, Orders).
- `src/context`: State management using React Context API (Cart, Search).
- `src/data`: Mock data for products and orders.
- `src/styles`: CSS modules and global styles.

## ⚙️ State Management

The application uses the **React Context API** to manage global state:

### CartContext

- Manages items in the shopping cart.
- Provides functions for adding, removing, and updating quantities.
- Calculates totals and item counts.

### SearchContext

- Manages the search query and filtered results.

## 🛠️ Key Technologies

- **Vite:** Next-generation frontend tool for fast builds and development.
- **React 19:** Modern UI library with advanced hooks.
- **React Router 7:** Handling navigation and nested routes.
- **Vanilla CSS:** Custom styling without external frameworks for maximum performance.
