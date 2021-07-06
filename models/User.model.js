'use strict '

const mongoose=require('mongoose');
const BookSchema=require('./Books.model')






const userSchema= new mongoose.Schema({
    email:{type:String},
    books:[BookSchema]
})

const userModel=mongoose.model('books',userSchema)

// seeding
// const seedUser=()=>{
//     const qasem = new userModel({
//         email:'Qasemcoder2020@gmail.com',
//         books:[{
//             nameBook:'go to hell ',
//             bookImg:'https://images-na.ssl-images-amazon.com/images/I/51PSBrilewL._SX331_BO1,204,203,200_.jpg',
//             bookDescription:'A finalist for the PEN Center USA Award for Nonfiction Welcome to Paradise, Now Go to Hell, is surfer and former war reporter Chas Smith’s wild and unflinching look at the high-stakes world of surfing on Oahu’s North Shore—a riveting, often humorous, account of beauty, greed, danger, and crime For two months every winter, when Pacific storms make landfall, swarms of mainlanders, Brazilians, Australians, and Europeans'},
//             {nameBook:'women in love ',
//             bookImg:'https://m.media-amazon.com/images/I/41BenSunWqL.jpg',
//             bookDescription:'Women in Love" begins one blossoming spring day in England and ends with a terrible catastrophe in the snow of the Alps. Ursula and Gudrun are very different sisters who become entangled with two friends, Rupert and Gerald, who live in their hometown. The bonds between the couples quickly become intense and passionate, but whether this passion is creative or destructive is unclear. In this astonishing novel, widely considered to be D. H. Lawrences best work, he explores what it means to be human in an age of conflict and confusion'

//     }]
//     })

//     // 2nd user 
//     const ahmad=new userModel({
//         email:'anofal719@gamil.com',
//         books:[{
//             nameBook:'one night in moon  ',
//             bookImg:'https://m.media-amazon.com/images/M/MV5BMjA0NjMxMTE0Nl5BMl5BanBnXkFtZTcwNzMwOTI0MQ@@._V1_SY264_CR6,0,178,264_AL_.jpg',
//             bookDescription:'Based on the true story of a young girl who went missing in the Australian outback in 1932.'},
//              {nameBook:'the other black girl',
//             bookImg:'https://media.bloomsbury.com/rep/bj/9781526630377.jpg',
//             bookDescription:'Twenty-six-year-old editorial assistant Nella Rogers is tired of being the only Black employee at Wagner Books. Fed up with the isolation and microaggressions, she is thrilled when Harlem-born and bred Hazel starts working in the cubicle beside hers. Theyve only just started comparing natural hair care regimens, though, when a string of uncomfortable events elevates Hazel to Office Darling, and Nella is left in the dust.Then the notes begin to appear on Nella desk: LEAVE WAGNER'

//     }]
//     });



//     console.log(qasem);
//     qasem.save();
//     ahmad.save()
//     return ahmad 
// }

// seedUser() // you need to incommit this if its not work 
module.exports=userModel

