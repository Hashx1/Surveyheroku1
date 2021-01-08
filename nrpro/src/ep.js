const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('1 STEP DONE AND A COUPLE MORE TO GO');
});

const PORT=process.env.PORT || 5000;
app.listen(PORT);