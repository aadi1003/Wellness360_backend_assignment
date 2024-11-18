import dotenv from "dotenv";
import  jwt  from "jsonwebtoken";

import User from "../models/usermodel.js";

dotenv.config();


export const authController = {
  // Register a new user
  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
      }

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
      }

      const user = new User({ username, password });
      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to register user" });
    }
  },

  // Login a user and generate a JWT
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      
      // Generate a JWT
      const token = jwt.sign({ userId: user._id }, process.env.jwt_secret_key, { expiresIn: "1h" });

      

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: "Faled to Login User" });
    }
  },
};


