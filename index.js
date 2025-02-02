const express = require('express');
const app = express();
const connectDB = require('./db');



const PORT = process.env.PORT || 5000;
connectDB();
//adding Routers imporintg 
const userRoutes=require('./Routes/UserRoutes');



//adding Routers
app.use('/api/user',userRoutes);

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! hey am vijay');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
