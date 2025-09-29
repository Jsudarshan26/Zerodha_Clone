require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");

const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.post("/neworder", (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body. mode,
  });

  newOrder.save();

  res.send("Order Send");
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});

  res.json(allHoldings);
});



app.get("/allPositins", async (req, res) => {
  let allPositins = await PositionsModel.find({});

  res.json(allPositins);
});

app.listen(PORT, () => {
  console.log("App Started");
  mongoose.connect(uri);
});
