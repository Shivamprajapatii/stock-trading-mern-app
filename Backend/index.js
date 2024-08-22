const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();

const bodyParser = require('body-parser');
const cors = require('cors');

const { Holding } = require("./schemas/HoldingSchema");
const { PositionModel } = require("./schemas/PositionSchema");


const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

app.get('/allholdings', async(req,res) => {
    let allData = await Holding.find({});

    res.json(allData);
})

app.get('/allpositions', async(req,res) => {
    let allData = await PositionModel.find({});

    res.json(allData);
})


// app.get("/addOrders", (req, res) => {
//     let tempPositins = [
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];

//     tempPositins.forEach((element) => {
//         let newTesmpPosition = new PositionModel({
//             product: element.product,
//             name: element.name,
//             qty: element.qty,
//             avg: element.avg,
//             price: element.price,
//             net: element.net,
//             day: element.day,
//             isLoss: element.isLoss,
//         });

//         // newTesmpPosition.save();

//     })
//     res.send("succesfully save Data");

// })


// app.get("/addHoldings", async (req, res) => {
//     let tempHolding = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//     
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];

//     tempHolding.forEach((element) => {
//         let newHolding = new Holding({
//             name: element.name,
//             qty: element.qty,
//             avg: element.avg,
//             price: element.price,
//             net: element.net,
//             day: element.day,
//         });

//         newHolding.save();
//     });

//     res.send("donw with save the Data!");
// })

app.listen(PORT, () => {
    console.log('Server Is Started on Port 3002');
    mongoose.connect(MONGO_URL)
        .then(() => {
            console.log("Database Connected");
        })
        .catch((err) => {
            console.error("Failed to Connect to Database", err);
        });
})
