const express = require('express');
const app = express();
const PORT = 3000;

const router = require('./routes');

//Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//routes
app.use(router);

app.listen(PORT, () =>{
    console.log(`Server is running at port :${PORT}`);
})