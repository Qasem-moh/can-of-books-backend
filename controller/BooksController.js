'use strict'
const {userModel , seedUser} =require('../models/User.model') 
const BooksControllerColl=(req, res)=> {
    // let obj=seedUser();
    // res.send(obj)
    
        let emailReq= req.query.email;
        
        userModel.findOne({ email: emailReq },  (error, userBook)=> {
        if (error) {
            res.send(error.message)
        } 
            res.send(userBook); 
        
    });
}



const createBooks=(req,res)=>{

    // let obj=seedUser();
    // res.send(obj)
    const {email ,nameBook ,bookImg, bookDescription }=req.body
    userModel.findOne({email:email}, (error,user)=>{
        if(error){
            res.send(error)
        }
        const newBook = {
            nameBook:nameBook,
            bookImg:bookImg,
            bookDescription:bookDescription
        }
        user.books.push(newBook);
        user.save();
        res.json(user.books)
    
    })
}

const updateBooks=(req,res)=>{
    const bookId=req.params.book_id;
    const {email ,nameBook ,bookImg, bookDescription}=req.body;
    userModel.findOne({email:email},(error,user)=>{
        if(error){
            res.send(error)
        }
        const newBook = {
            nameBook:nameBook,
            bookImg:bookImg,
            bookDescription:bookDescription
        }
        user.books.splice(bookId,1,newBook);
        user.save();
        res.send(user.books)
    })

}

const deleteBook=(req,res)=>{
    const bookId=req.params.book_id;
    const {email }=req.query;
    userModel.findOne({email:email},(error,user)=>{
        if(error){
            res.send(error)
        }
        
        user.books.splice(bookId,1);
        user.save();
        res.send(user.books)
    })
}

module.exports={BooksControllerColl,createBooks,updateBooks,deleteBook}

