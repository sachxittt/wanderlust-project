const express = require("express");
const app = express();
const Listing = require("./models/listingSchema");
const path = require("path");
const router = express.Router();
const mongoose = require("mongoose");
main().
catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wanderlustt');


}
// Example in server.js
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs')
app.set('views/listings', path.join(__dirname, 'views/listings'));

app.set('view engine','ejs')



// home route
app.get("/",(req,res)=>{
    res.send("homw route");
    
})

app.get("/listings",(req,res)=>{
    res.render("listings/index.ejs")
})



app.listen("3000",()=>{
    console.log(`connected to server ${3000}`)
})