# User Management Dashboard

A simple **React.js** web application to manage users.  
Fetches user data from a public API, allows adding users locally, searching, and viewing detailed user information.

---



## 🛠️ Features

- **Home Page**
  - Displays users in a responsive card layout.
  - Search users by name or email.
  - View user details.

- **User Details Page**
  - Shows full details of the selected user.
  - Back button to return to the home page.

- **Add User Page**
  - Form to add a new user.
  - Form inputs: Name, Email, Phone, Company.
  - Users are stored in **local storage** and merged with API data.

- **Responsive Design**
  - Works on desktop and mobile devices.
  - Material UI buttons and SCSS styling.

---



##  Tech Stack

- **React.js 18** with Functional Components and Hooks  
- **React Router v6** for routing  
- **Axios** for API calls  
- **Material UI** for UI components  
- **SCSS** for styling  
- **Local Storage** for storing added users  
- **Vite** for build tooling

---

## Approach

- Used **React 18 functional components** with **hooks** for state and lifecycle management.
- **React Router v6** for navigation between Home, User Details, and Add User pages.
- **Axios** to fetch user data from the public API.
- Added functionality to **store newly added users in localStorage** and merge with API data.
- Designed a **responsive layout** using SCSS and Material UI components for buttons and forms.
- Implemented **search functionality** to filter users by name or email.


##  Installation

1. **Clone the repository**

```bash
git clone https://github.com/riyaverma04/user-management-dashboard.git
cd user-management-dashboard



2. **Install dependencies**

npm install

3. **Start development server**

npm run dev
4. **Open your browser at** 

 http://localhost:5173




Author : Riya Verma
