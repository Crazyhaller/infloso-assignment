# Connectverse & MelodyVerse

## Project Description

This project consists of two parts:

- **Connectverse**:
  A Node.js API that handles user registration and authentication for a fictional social media platform. It implements secure registration, login, and JWT-based authentication, adhering to best practices such as password hashing, token verification, and protection of protected routes.

- **Melodyverse**:
  A React frontend that features visually appealing, user-friendly login and signup screens for a fictional music streaming service. The frontend supports responsive design across different devices (desktop, tablet, mobile), along with additional UX enhancements.

## Features

- **Connectverse**:

  - _User Registration (POST /signup):_
  - Registers users with a username, email, and password.
  - Validates inputs and ensures unique usernames and emails.
  - Hashes passwords securely using bcrypt.
  - Stores user data in MongoDB.
  - Returns a success message and a JWT token upon successful registration.

  - _User Login (POST /login):_
  - Authenticates users by verifying their username/email and password.
  - Generates and returns a JWT token upon successful login.
  - Returns error messages if authentication fails.

  - _JWT-Based Authentication:_
  - Generates JWT tokens with appropriate payload and expiration time upon login.
  - Protects routes by validating JWT tokens and ensuring proper user authentication.

  - _Rate Limiting:_
  - Protects against brute force attacks by limiting the number of requests to critical endpoints (like login) using express-rate-limit.

- **MelodyVerse**:

  - _Login Screen:_
  - Includes fields for username/email and password.
  - Implements password strength validation and error messages for invalid input.
  - Supports "Forgot Password" link (dummy link).
  - Implements a "Remember Me" option using local storage or cookies.
  - Redirects to the homepage upon successful login.
  - Adds a password visibility toggle for user convenience.

  - _Signup Screen:_
  - Includes fields for username/email, password (with confirmation), and optional fields like name and profile picture.
  - Implements validation for required fields and email format using React state management.
  - Includes terms and conditions checkbox (mandatory).
  - Displays error messages for validation failures and success messages upon successful registration.
  - Simulates sending a welcome email notification (dummy, no actual email sent).
  - Redirects to the login screen after successful signup.
  - Adds a password visibility toggle for better user experience.

  - _Additional Enhancements:_
  - Microinteractions and animations added using Framer Motion to enhance the user experience.
  - Fully responsive design using Tailwind CSS to ensure a seamless experience across devices.

## Technologies

- **Backend**:
- Node.js
- Express.js
- MongoDB
- Mongoose
- Bcrypt
- Jsonwebtoken
- Express-rate-limit

- **Frontend**:
- React.js
- Redux Toolkit
- Tailwind CSS
- Framer Motion
- React Router
- React-Toastify
- Formik
- Yup

## Bonus Features

- Rate Limiting: To protect critical routes (like login) from brute force attacks.
- Middleware for Authentication and Authorization: Implemented middleware to ensure protected routes are accessed only by authenticated users.
- Password Visibility Toggle: Users can toggle between hiding and showing their passwords during login and signup.
- Animations: Framer Motion is used to add subtle animations to enhance user experience.

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Crazyhaller/infloso-assignment.git
   ```

2. Navigate to the project directory:

   ```sh
   cd infloso-assignment
   ```

3. Install dependencies on both Backend and Frontend folders:

   ```sh
   cd ./backend
   npm install
   cd ../
   cd ./frontend
   npm install
   ```

4. Set up a MongoDB database:

- Create a free MongoDB account and set up a cluster or run MongoDB locally.
- Get your connection string (e.g., mongodb://localhost:27017/connectverse for local setup or a cloud URL for MongoDB Atlas).

5. Create a .env file in the backend directory and add the following variables:

   ```sh
   DB_URI=your_connection_string
   JWT_SECRET=your_secret
   PORT=5000
   ```

6. Create a .env file in the frontend directory and add the following variable:

   ```sh
   REACT_APP_API_URL='http://localhost:5000/api/auth'
   ```

7. Run the command on backend and frontend directory:

   ```sh
   npm start
   ```

8. Open http://localhost:3000 in your browser to access the MelodyVerse app.

## Conclusion

This project showcases secure user authentication with JWT and a visually appealing frontend with fully responsive design. The additional features such as rate limiting, password visibility toggle, and microinteractions enhance both security and user experience.
