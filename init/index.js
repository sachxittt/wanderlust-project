const mongoose = require("mongoose");
const Listing = require("../models/listingSchema");
const initData = require("./data.js");
main().
then(()=>{
    console.log("connected to db")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wanderlustt');


}
const initDb = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}
initDb();
