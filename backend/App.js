const express = require('express');
const app = express();
const routes = require('./route/authrouter');
const connectDB = require('./config/db.js');
const dotenv =require('dotenv') 


dotenv.config()
connectDB();
app.use(express.json());

app.use('/api', routes);


app.get('/', function(req, res) {
  res.send({
    message: 'Calendar'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`);
});
