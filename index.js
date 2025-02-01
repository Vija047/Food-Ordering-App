const express = require('express');
const app = express();
const connectDB = require('./db');
const PORT = process.env.PORT || 5000;

connectDB();
const userRoutes=require('./Routes/register');
app.use(express.json());
app.use('/api/register',userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World! hey am vijay');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
