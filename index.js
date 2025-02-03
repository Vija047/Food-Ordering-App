const express = require('express');
const app = express();
const connectDB = require('./config/db');
// const cors = require("cors");

const PORT = process.env.PORT 
||6000;
connectDB();

//adding Routers imporintg 
const userRoutes=require('./Routes/UserRoutes');
const restaurantRotes=require("./Routes/RestaurntRoutes")
const Orders=require('./Routes/orderRoutes');



//adding Routers
app.use('/api/user',userRoutes);
app.use("/api/restaurants",restaurantRotes);
app.use("/api/order", Orders);

// middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors()); 

app.get('/', (req, res) => {
    res.send('Hello World! hey am vijay');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
