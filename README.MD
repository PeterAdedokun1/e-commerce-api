# E-Commerce API

A RESTful E-Commerce API built with Node.js, Express, and MongoDB. Supports JWT cookie-based authentication, product management, reviews, and orders.

## Features

- **Auth** — register, login, logout with JWT stored in signed cookies
- **Users** — admin and regular user roles, profile management, password update
- **Products** — full CRUD (admin only), image upload support
- **Reviews** — create/update/delete reviews per product, average rating auto-calculated via aggregation pipeline
- **Orders** — place orders with Stripe payment integration, order status tracking

## Tech Stack

- Node.js / Express
- MongoDB / Mongoose
- JSON Web Tokens (cookie-based)
- bcryptjs, helmet, cors, express-rate-limit, xss-clean, express-mongo-sanitize, morgan

## Getting Started

### Prerequisites

- Node.js 14+
- MongoDB instance (local or Atlas)

### Installation

```bash
git clone https://github.com/PeterAdedokun1/e-commerce-api.git
cd e-commerce-api
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_LIFETIME=1d
```

### Run

```bash
npm start
```

Server starts on port `5000` by default.

## API Endpoints

| Resource | Base Route |
|----------|-----------|
| Auth | `/api/v1/auth` |
| Users | `/api/v1/users` |
| Products | `/api/v1/products` |
| Reviews | `/api/v1/reviews` |
| Orders | `/api/v1/orders` |

### Auth

| Method | Route | Access |
|--------|-------|--------|
| POST | `/api/v1/auth/register` | Public |
| POST | `/api/v1/auth/login` | Public |
| GET | `/api/v1/auth/logout` | Authenticated |

### Users

| Method | Route | Access |
|--------|-------|--------|
| GET | `/api/v1/users` | Admin |
| GET | `/api/v1/users/:id` | Authenticated |
| GET | `/api/v1/users/showMe` | Authenticated |
| PATCH | `/api/v1/users/updateUser` | Authenticated |
| PATCH | `/api/v1/users/updateUserPassword` | Authenticated |

### Products

| Method | Route | Access |
|--------|-------|--------|
| GET | `/api/v1/products` | Public |
| GET | `/api/v1/products/:id` | Public |
| POST | `/api/v1/products` | Admin |
| PATCH | `/api/v1/products/:id` | Admin |
| DELETE | `/api/v1/products/:id` | Admin |
| POST | `/api/v1/products/uploadImage` | Admin |

### Reviews

| Method | Route | Access |
|--------|-------|--------|
| GET | `/api/v1/reviews` | Public |
| GET | `/api/v1/reviews/:id` | Public |
| POST | `/api/v1/reviews` | Authenticated |
| PATCH | `/api/v1/reviews/:id` | Authenticated |
| DELETE | `/api/v1/reviews/:id` | Authenticated |

### Orders

| Method | Route | Access |
|--------|-------|--------|
| GET | `/api/v1/orders` | Admin |
| GET | `/api/v1/orders/showAllMyOrders` | Authenticated |
| GET | `/api/v1/orders/:id` | Authenticated |
| POST | `/api/v1/orders` | Authenticated |
| PATCH | `/api/v1/orders/:id` | Authenticated |

## License

ISC
