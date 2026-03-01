# 📝 BlogNexus - Backend Mastery

A high-performance, secure, and scalable MERN stack blog application. This documentation focused on the robust backend architecture and API interaction.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v16 or higher
- **MongoDB**: Local instance or Atlas URI
- **npm** or **yarn**

### Installation

1. **Clone and Install Backend**:

   ```bash
   cd backend
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file in the `/backend` directory:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/blog_crud
   JWT_SECRET=your_super_secret_key
   ```

3. **Run the Server**:

   ```bash
   # Development mode with nodemon
   npm run dev

   # Production mode
   npm start
   ```

---

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Security**: JWT (JSON Web Tokens) & BcryptJS
- **Validation**: Mongoose Built-in Validators

---

## 📡 API Reference

All requests must be sent to `http://localhost:5000`.

### 🔐 Authentication

| Method | Endpoint           | Description           | Public? |
| :----- | :----------------- | :-------------------- | :------ |
| `POST` | `/api/auth/signup` | Register a new user   | Yes     |
| `POST` | `/api/auth/login`  | Log in and get token  | Yes     |
| `GET`  | `/api/auth/me`     | Get current user info | No      |

**Register User Body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123"
}
```

> [!IMPORTANT]
> Password must be at least **6 characters** long.

---

### 📰 Blog Posts

| Method   | Endpoint         | Description          | Public? |
| :------- | :--------------- | :------------------- | :------ |
| `GET`    | `/api/posts`     | Fetch all blog posts | Yes     |
| `GET`    | `/api/posts/:id` | Get a specific post  | Yes     |
| `POST`   | `/api/posts`     | Create a new post    | No      |
| `PUT`    | `/api/posts/:id` | Update your post     | No      |
| `DELETE` | `/api/posts/:id` | Delete your post     | No      |

**Create Post Body:**

```json
{
  "title": "The Future of AI",
  "content": "Exploring the boundaries of agentic coding..."
}
```

---

### 💬 Comments

| Method | Endpoint                  | Description             | Public? |
| :----- | :------------------------ | :---------------------- | :------ |
| `POST` | `/api/posts/:id/comments` | Add a comment to a post | Yes     |

**Add Comment Body:**

```json
{
  "name": "Anonymous Dev",
  "content": "This is an insightful read!"
}
```

---

## 🛡 Security & Headers

For all **Private** endpoints (marked "No" in Public columns), you must include the JWT token in the request headers:

```http
Authorization: Bearer <your_jwt_token>
```

---

## 🏗 Project Structure

```text
backend/
├── config/         # Database connection
├── controllers/    # API logic handlers
├── middleware/     # Auth guardians
├── models/         # Database schemas
├── routes/         # API endpoints
└── server.js       # Entry point
```
# blog--crud
