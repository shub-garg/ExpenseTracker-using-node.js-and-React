# Expense Tracker

An Expense Tracker application built with React, Node.js, Express, and MongoDB to help users manage their incomes and expenses efficiently.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)


![Recording2024-07-20061649-ezgif com-optimize](https://github.com/user-attachments/assets/64e35882-fa9c-497c-90ec-802331e0d6f9)

## Features
- User authentication (register, login, logout)
- Add, edit, and delete incomes
- Add, edit, and delete expenses
- View transaction history
- Responsive charts and graphs to visualize income and expenses
- Notifications for user actions and errors

## Technologies Used
### Frontend
- **React.js**: For building the user interface
- **React Router**: For client-side routing
- **Styled Components**: For styling components
- **Chart.js**: For displaying charts
- **react-chartjs-2**: React wrapper for Chart.js
- **axios**: For making HTTP requests
- **react-cookie**: For handling cookies
- **react-hot-toast**: For displaying toast notifications

### Backend
- **Node.js**: For server-side JavaScript execution
- **Express.js**: For building the backend API
- **MongoDB**: NoSQL database for storing data
- **Mongoose**: ODM for MongoDB
- **JWT (JSON Web Tokens)**: For authentication
- **bcrypt**: For password hashing
- **cors**: For handling Cross-Origin Resource Sharing
- **dotenv**: For managing environment variables
- **body-parser**: For parsing incoming request bodies

### Development Tools
- **Visual Studio Code**: Code editor
- **Git**: Version control
- **GitHub**: Repository hosting

### Hosting and Deployment
- **Netlify/Vercel**: For hosting the frontend (if used)
- **Heroku**: For hosting the backend (if used)
- **Docker**: For containerizing the application (if used)

## Installation
### Prerequisites
- Node.js
- npm or yarn
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:
```bash
   npm install
   # or
   yarn install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
   npm run dev
   # or
   yarn dev
```

## Usage
1. Register a new account or log in with an existing account.
2. Add, edit, and delete incomes and expenses.
3. View the transaction history and visualizations on the dashboard.

## API Endpoints
### Auth
- **POST /api/v1/register**: Register a new user
- **POST /api/v1/login**: Log in an existing user
- **POST /api/v1/logout**: Log out the current user
- **POST /**: Check user authentication status

### Income
- **POST /api/v1/add-income**: Add a new income
- **GET /api/v1/get-incomes**: Get all incomes for the user
- **DELETE /api/v1/delete-income/:id**: Delete an income by ID

### Expense
- **POST /api/v1/add-expense**: Add a new expense
- **GET /api/v1/get-expenses**: Get all expenses for the user
- **DELETE /api/v1/delete-expense/:id**: Delete an expense by ID

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or suggestions!
