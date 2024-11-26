# GadgetHaven - E-Commerce Platform

Welcome to **GadgetHaven**, a sleek and functional e-commerce platform for gadget enthusiasts. This project is built using **React.js** based on a detailed Figma design, ensuring an intuitive and seamless user experience. The platform features functionalities like product browsing, shopping cart management, wishlist handling, product filtering, and sorting.

## 🌐 Live Website and Resources

- **Live Website**: https://gadge-theaven.netlify.app/

---

## 📜 Features

1. **Structured Navigation Bar**
   - Dynamic navbar with active route indication.
   - Menu items: *Logo, Brand Name, Dashboard, Stats*.
   - Persistent across all pages.

2. **Responsive Home Page**
   - **Banner Section**: An attractive banner with a button redirecting to the Dashboard.
   - **Sidebar Categories**: Filter gadgets by categories (e.g., Computers, Phones, Smartwatches).
   - **Gadget Cards**: Display product details in a grid layout (image, name, price).

3. **Interactive Product Details Page**
   - Shows all product properties (image, name, price, description, specs, rating, availability).
   - Features **Add to Cart** and **Add to Wishlist** buttons:
     - Wishlist button disables after the first click to prevent duplicates.
     - Toast notifications for both actions.

4. **Dashboard**
   - Two tabs: **Cart** and **Wishlist**.
   - Cart displays total price and supports sorting items by price.
   - Items can be moved from Wishlist to Cart.

5. **Edge Case Handling**
   - Maximum cart total limited to $1000.
   - Prevents duplicate items in Wishlist.
   - Reloading maintains state using Context API and LocalStorage.

---

## 🔧 Technical Implementation

- **React Concepts Used**:
  - Component-based architecture.
  - React Router for navigation.
  - Context API for state management.
  - Hooks: `useState`, `useEffect`, `useContext`, `useReducer`, and `useNavigate`.
  - Dynamic page titles using `useEffect` and `react-helmet`.

- **State and Data Management**:
  - Cart and Wishlist managed using Context API.
  - Data persistence with LocalStorage for reload handling.

- **Styling and Design**:
  - Figma-inspired responsive design.
  - Separate themes for Home and other pages (using `useLocation`).

---

## 📊 Statistics Page

- Includes a **Composed Chart**:
  - X-axis: Product names.
  - Y-axis: Prices.
  - Visualizes prices with area and bar charts, ratings as scatter points.

---

## ⚙️ Additional Features

1. **Toast Notifications**
   - Adding items to Cart/Wishlist displays unique messages.

2. **404 Page**
   - User-friendly 404 page for invalid routes.

3. **Purchase Flow**
   - Purchase button shows a congratulatory modal and resets the cart.
   - Navigation back to Home using `useNavigate`.

4. **Favicon and Dynamic Titles**
   - Custom favicon and page-specific titles for enhanced branding.

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed on your system.
