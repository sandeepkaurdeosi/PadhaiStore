import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json())

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));


  //defining Routes
  app.use("/book",bookRoute)
  app.use("/user",userRoute)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
