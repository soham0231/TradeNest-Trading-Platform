import mongoose from "mongoose";    

const HoldingSchema = new mongoose.Schema({  
    name:String,
    qty: Number,
    avg: Number,
    price:Number,
    net: String,
    day: String,
});

const Holding = mongoose.model("Holding", HoldingSchema);

export default Holding;

  