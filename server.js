'use strict';
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const jwt=require('jsonwebtoken');
const jwksClient=require('jwks-rsa');
require('dotenv').config();
app.use(cors());
app.use(express.json())
const {BooksControllerColl,
        createBooks, 
        updateBooks,
        deleteBook}=require('./controller/BooksController');


const AUTH0_DOMAIN =process.env.AUTH0_DOMAIN
const PORT=process.env.PORT

mongoose.connect('mongodb://localhost:27017/books',
    { useNewUrlParser: true, useUnifiedTopology: true }
);


const client = jwksClient({
    // this url comes from your app on the auth0 dashboard 
    jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`
  });

// this is a ready to use function
const getKey=(header, callback)=>{
    client.getSigningKey(header.kid, function(err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      });
}


app.get('/', (req, res) =>{
    console.log('home server route');
    
    res.send('hello world ');
});

app.get('/books', BooksControllerColl);
app.post('/books',createBooks)
app.put('/books/:book_id',updateBooks)
app.delete('/books/:book_id',deleteBook)


// 'Bearer ;alsdkj;laskd;lkasd;lkl'
app.get('/authorize',(req,res)=>{
    const token=req.headers.authorization.split(' ')[1];
    jwt.verify(token,getKey,{},(err,user)=>{
        if(err){
            res.send('invalid token');
        }
        res.send(user)
    })
    res.send(token);
});

app.listen(PORT,()=>{
    console.log(`listening to port: ${process.env.PORT}`);
})



