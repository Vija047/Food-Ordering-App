const express = require('express');
const app = express();
const connectDB = require('./config/db');
var cookieParser = require('cookie-parser');

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
app.use("/api/orders", Orders);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello World! hey am vijay');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
