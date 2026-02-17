# 🚀 Interactive Dynamic Dropdown Menu

A sleek, modern, and highly responsive dropdown menu component built with **React 18** and **Vite**. This project demonstrates advanced front-end engineering principles, including dynamic data mapping, state-driven UI updates, and polished CSS transitions.

---

## ✨ Key Features

* **Dynamic Data Rendering**: Automatically generates menu items by mapping through a centralized `castData` array, ensuring scalability.
* **Component-Based Architecture**: Built with modularity in mind, making it easy to integrate into larger portfolio projects.
* **Modern UI/UX**: Features custom CSS animations, hover effects, and a clean, dark-themed aesthetic.
* **Optimized Performance**: Developed using Vite for lightning-fast Hot Module Replacement (HMR) and optimized build sizing.
* **Clean Code Standards**: Implements React best practices such as Prop Destructuring and conditional rendering to prevent runtime errors.

---

## 🛠 Tech Stack

* **Core**: React 18
* **Build Tool**: Vite
* **Styling**: Custom CSS with Flexbox and modern UI principles
* **Version Control**: Git (Personalized history, free from classroom bots)

---

## 📦 Getting Started

### Prerequisites
* **Node.js** (Latest LTS version)
* **npm**

### Installation
1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/Keepgoing-30/user-section.git](https://github.com/Keepgoing-30/user-section.git)
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    *The application will be accessible at: `http://localhost:5173`*.

---

## 📐 Data Structure

The menu is driven by a flexible object array, allowing for easy updates to your project list or skills:

```javascript
const castData = [
  { id: 1, name: 'Backend Project' },
  { id: 2, name: 'Frontend Project' },
  { id: 3, name: 'AI Project' },
  { id: 4, name: 'Sale Project' }
];
