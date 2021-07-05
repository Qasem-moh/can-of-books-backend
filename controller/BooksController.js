'use strict'
const userModel =require('../models/User.model') 
const BooksControllerColl=(req, res)=> {
        let emailReq = req.query.email;
        userModel.find({ email: emailReq },  (error, userBook)=> {
        if (error) {
            res.send(error.message)
        } else {
            res.send(userBook); 
        }
    });
}


module.exports=BooksControllerColl;

