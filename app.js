const express = require("express");
const app = express();
const Listing = require("./models/listingSchema");
const path = require("path");
const router = express.Router();



// Example in server.js
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs')



// home route
app.get("/",(req,res)=>{
    res.send("Home route");
})




app.listen("3000",()=>{
    console.log(`connected to server ${3000}`)
})