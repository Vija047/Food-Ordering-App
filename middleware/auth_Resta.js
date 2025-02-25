const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const secretKey = process.env.JWT_SECRET;
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
  if (!req.user || req.user.userType == "admin") {
    return res.status(403).json({ message: " Admin access required" });
  }
  next();
};
const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

    if (!token) {
      return res.status(401).json({ error: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = await User.findById(decoded.id).select("-password"); // Attach user info to req

    if (!req.user) {
      return res.status(401).json({ error: "User not found" });
    }

    next(); // Proceed to next middleware/route handler
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
module.exports = { authenticate, authorizeAdmin ,protect};
