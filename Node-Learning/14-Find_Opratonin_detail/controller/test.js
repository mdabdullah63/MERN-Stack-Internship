const User = require("../model/userSchema");
const { projection } = require("./user.controller");
async function test(req, res) {
  const users = await User.aggregate([{$lookup:{
     from:'orders',
     localField:'_id',
     foreignField:'userId',
    as:'orders'
   }},{
    $addFields:{
      totalQuantity: {
   $sum: "$orders.quantity"
 }}
   },{
     $match:{
       totalQuantity:{$gte:2}
     }
   },{
     $project:{
       name:1,_id:0,totalQuantity:1,
     }
   }

 ])
}
