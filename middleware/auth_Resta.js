const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const secretKey = process.env.your_jwt_secret_key;
if (!secretKey) {
  console.error("Missing JWT secret key!");
}

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: " No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(403).json({ message: " Invalid or expired token" });
  }
};

const authorizeAdmin = (req, res, next) => {
  if (!req.user || req.user.userType !== "admin") {
    return res.status(403).json({ message: " Admin access required" });
  }
  next();
};

module.exports = { authenticate, authorizeAdmin };
