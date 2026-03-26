import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import HoldingModel from "./models/HoldingSchema.js";
import PositionModel from "./models/PositionSchema.js";
import OrderModel from "./models/OrdersSchema.js";
import authRoutes from "./routes/authRoutes.js";
import auth from "./middleware/auth.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//middleware used bcz the frontend is running on different port and we need to allow cross-origin requests from frontend to backend
app.use(cors());

//middleware to parse incoming request bodies in JSON format and URL-encoded format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use /auth route for authentication related routes like register and login
app.use("/auth", authRoutes);

// establishing connection to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

let tempHolding = [
  {
    avg: 809.9,
    price: 779.8,
    net: "-3.72%",
    day: "-0.01%",
    isLoss: true,
  },
  {
    name: "RELIANCE",
    qty: 1,
    avg: 2193.7,
    price: 2112.4,
    net: "-3.71%",
    day: "+1.44%",
  },
  {
    name: "SBIN",
    qty: 4,
    avg: 324.35,
    price: 430.2,
    net: "+32.63%",
    day: "-0.34%",
    isLoss: true,
  },
  {
    name: "SGBMAY29",
    qty: 2,
    avg: 4727.0,
    price: 4719.0,
    net: "-0.17%",
    day: "+0.15%",
  },
  {
    name: "TATAPOWER",
    qty: 5,
    avg: 104.2,
    price: 124.15,
    net: "+19.15%",
    day: "-0.24%",
    isLoss: true,
  },
  {
    name: "TCS",
    qty: 1,
    avg: 3041.7,
    price: 3194.8,
    net: "+5.03%",
    day: "-0.25%",
    isLoss: true,
  },
  {
    name: "WIPRO",
    qty: 4,
    avg: 489.3,
    price: 577.75,
    net: "+18.08%",
    day: "+0.32%",
  },
];
let tempPosition = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];
//Adding holdings and position to database

// app.get('/addHolding', async(req,res)=>{

// tempholding.forEach((item)=>{
//    let newHolding = new HoldingModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//    });

//    newHolding.save()
//  });
//   res.send("Holdings added successfully");

// });

//ading positions to database
// app.get('/addpositions', async(req,res)=>{

// tempPosition.forEach((item)=>{
//    let newPosition = new PositionModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//    });

//    newPosition.save()
//  });
//   res.send("positions added successfully");

// });


//api endpoint to get holding data from database (protected)
//added auth middleware to protect this route, only authenticated users can access this route
app.get("/allHoldings",auth, async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

//api endpoint to get positions data from database
//added auth middleware to protect this route, only authenticated users can access this route
app.get("/allPositions",auth,async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

//api endpoint to add new order to database
//added auth middleware to protect this route, only authenticated users can access this route
app.post("/newOrder",auth,async (req, res) => {
  let newOrder = await OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order added successfully");
});

//server listening on specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
