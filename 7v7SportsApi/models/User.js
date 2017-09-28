var db=require('../dbconnection');

var User={

getAllUsers:function(callback){

return db.query("Select * from wpbv_users",callback);

},
getUserById:function(id,callback){

    return db.query("select * from wpbv_users where Id=?",[id],callback);
}
};
module.exports=User;