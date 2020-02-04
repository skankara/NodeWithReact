const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
app.get('/',(req,res)=>{
  res.send({hi:'there'});
});

app.listen(5000,()=>{
  console.log("Server started at http://localhost:5000/");
});
