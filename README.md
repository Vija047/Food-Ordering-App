# Food Ordering App - Backend
This is the backend for the Food Ordering App. It provides APIs for user authentication, menu management, order processing, and more.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/food-ordering-app.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd food-ordering-app/backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Configuration
1. Create a `.env` file in the root of the backend directory and add the following environment variables:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_secret_key
    ```

### Running the Server
Start the development server:
```bash
npm run dev
```

## File Structure
```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── menuController.js
│   ├── orderController.js
│   └── restaurantController.js
├── models/
│   ├── User.js
│   ├── MenuItem.js
│   ├── Order.js
│   └── Restaurant.js
├── routes/
│   ├── authRoutes.js
│   ├── menuRoutes.js
│   ├── orderRoutes.js
│   └── restaurantRoutes.js
├── middleware/
│   └── authMiddleware.js
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Menu
- `GET /api/menu` - Get all menu items
- `POST /api/menu` - Add a new menu item

### Orders
- `POST /api/orders` - Place a new order
- `GET /api/orders` - Get all orders

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `POST /api/restaurants` - Add a new restaurant
- `PUT /api/restaurants/:id` - Update a restaurant by ID
- `DELETE /api/restaurants/:id` - Delete a restaurant by ID

## License
This project is licensed under the MIT License.