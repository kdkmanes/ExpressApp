const express = require('express');


const app = express();


const PORT = 9000 || process.env.PORT;

app.get('/',(req, res)=>{
    res.json({message:'Application Running'})
})


app.listen(PORT, ()=>{
    console.log(`Server running`)
})