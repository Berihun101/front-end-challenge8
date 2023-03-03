const express=require('express');
const https=require('https');
const request=require('request')
const app=express();
 app.use(express.static('public'));
 app.set('view engine', 'ejs');
app.get('/', (req,res)=>{
  https.get('https://api.adviceslip.com/advice', (response)=>{
   response.on('data', (data)=>{
     const advice=JSON.parse(data);
     const adviceID=advice.slip.id;
     const quote=advice.slip.advice;
        res.render("index", {adviceid:adviceID, advice:quote})

})
})


})
 


app.listen(3000, ()=>{
  console.log("serever is running on port 3000");
})
