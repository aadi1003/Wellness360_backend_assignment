import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Get token from the Authorization header
    
  if (!token) {
    return res.status(401).json({ error: "Access denied, no token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret_key); // Verify the token
    req.user = decoded; // Attach decoded user info to the request
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};
