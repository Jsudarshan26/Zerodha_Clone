require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const User = require("./model/UserModel");
const generateToken = require("./utils/generateToken");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// CORS configuration for cross-subdomain
app.use(
  cors({
    origin: [
      "https://zerodha-clone-frontend-yb92.onrender.com",
      "https://zerodha-clone-dashboard-krkg.onrender.com",
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

// ==================== AUTHENTICATION ROUTES ====================

// @desc    Register a new user
// @route   POST /api/auth/register
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      const token = generateToken(user._id);

      // Set HTTP-only cookie for cross-subdomain access

      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        domain: '.onrender.com',
        maxAge: 30 * 24 * 60 * 60 * 1000,
        path: '/'
      });



      
      res.cookie(
        "user",
        JSON.stringify({
          _id: user._id,
          name: user.name,
          email: user.email,
        }),
        {
          secure: true,
          sameSite: "none",
          domain: ".onrender.com",
          maxAge: 30 * 24 * 60 * 60 * 1000,
          path: "/",
        }
      );

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        message: "Registration successful",
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @desc    Auth user & get token
// @route   POST /api/auth/login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email }).select("+password");

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);

      // Set HTTP-only cookie for cross-subdomain access
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        domain: ".onrender.com",
        maxAge: 30 * 24 * 60 * 60 * 1000,
        path: "/",
      });

      res.cookie(
        "user",
        JSON.stringify({
          _id: user._id,
          name: user.name,
          email: user.email,
        }),
        {
          secure: true,
          sameSite: "none",
          domain: ".onrender.com",
          maxAge: 30 * 24 * 60 * 60 * 1000,
          path: "/",
        }
      );

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        message: "Login successful",
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @desc    Get user profile
// @route   GET /api/auth/profile
app.get("/api/auth/profile", async (req, res) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback_secret"
    );
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
});

// @desc    Logout user
// @route   POST /api/auth/logout
app.post("/api/auth/logout", (req, res) => {
  // Clear cookies
  res.clearCookie("token", {
    domain: ".onrender.com",
    path: "/",
  });
  res.clearCookie("user", {
    domain: ".onrender.com",
    path: "/",
  });

  res.json({ message: "Logged out successfully" });
});

// @desc    Check auth status
// @route   GET /api/auth/check
app.get("/api/auth/check", async (req, res) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.json({ authenticated: false });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback_secret"
    );
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.json({ authenticated: false });
    }

    res.json({
      authenticated: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.json({ authenticated: false });
  }
});

// ==================== EXISTING ROUTES ====================

app.post("/neworder", (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.json({ message: "Order placed successfully", order: newOrder });
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

// Health check route
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Zerodha Clone Backend is running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  mongoose
    .connect(uri)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));
});
