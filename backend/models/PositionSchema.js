import mongoose from "mongoose";

const PositionSchema = new mongoose.Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss:Boolean,
});

const Position = mongoose.model("Position", PositionSchema);
export default Position;