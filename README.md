
# 📚 Books Collection API

A fully RESTful API designed for managing a collection of books, featuring CRUD operations, robust validation, and seamless integration with MongoDB.

---

## 🚀 Features

- Full **CRUD** operations for managing books.
- **Data validation** using Joi for request integrity.
- Integration with **MongoDB** for persistent storage.
- Custom endpoints for:
  - Random book recommendations.
  - Marking books as favorites.
- RESTful architecture with consistent HTTP status codes and error handling.

---

## 📋 Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or Atlas)
- npm or yarn as your package manager.

---

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/ayanadamtew/books-api.git
cd books-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and configure the following:
```plaintext
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Start the Development Server
```bash
npm run dev
```

---

## 🔗 API Endpoints

### 📖 Book Management

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| GET    | `/api/books`       | Fetch all books          |
| POST   | `/api/books`       | Add a new book           |
| GET    | `/api/books/:id`   | Fetch a specific book    |
| PUT    | `/api/books/:id`   | Update a book            |
| DELETE | `/api/books/:id`   | Delete a book            |

### 🌟 Custom Features

| Method | Endpoint                   | Description                      |
|--------|----------------------------|----------------------------------|
| GET    | `/api/books/recommendations` | Get a random book recommendation |
| PUT    | `/api/books/:id/favorite`    | Mark a book as favorite          |

---

## 📝 Data Validation

Books are validated using **Joi**, ensuring only valid data is saved.

### Required Book Fields:
```json
{
  "title": "string (required)",
  "author": "string (required)",
  "isbn": "string (required)",
  "publishedYear": "number (required, between 1000 and current year)"
}
```

Invalid requests receive a `400 Bad Request` response with a detailed error message.

---

## 🚀 Deployment

### Deploy Your Own Instance:
1. Choose a platform like **Heroku** or **Vercel**.
2. Connect your GitHub repository.
3. Set up environment variables (e.g., `MONGODB_URI`) in the platform dashboard.
4. Deploy your main branch.

---

## 🧪 Testing

Run the test suite to ensure all endpoints function as expected:
```bash
npm test
```

---

## 📦 Project Structure

```plaintext
books-api/
├── models/
│   └── Book.js              # MongoDB schema definition
├── routes/
│   └── bookRoutes.js        # Routes for books API
├── validation/
│   └── validation.js        # Joi validation middleware
├── tests/
│   └── api.test.js          # Integration tests
├── server.js                # Entry point for the app
├── .env                     # Environment variables
├── .gitignore               # Git ignored files
└── README.md                # Documentation
```

---

## 🛠️ Built With

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - Object modeling for MongoDB
- **Joi** - Schema-based data validation
- **dotenv** - Environment variable management

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add NewFeature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## 👥 Authors

- **Ayana Damtew** - Creator - [GitHub](https://github.com/ayanadamtew)

---

## 🙏 Acknowledgments

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [Joi Validation Library](https://joi.dev/)
- [RESTful API Best Practices](https://restfulapi.net/)

---
