var mysql=require('mysql')
connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'test',
});
connection.connect();
const getData=async(parent,args)=>{
a1= await new Promise((resolve,reject)=>{
    connection.query(`SELECT content from contents1 WHERE id=?`,[args.id],
    (error,results,fields)=>{
        if(error) throw error;
         resolve(results[0]);
    })});
return a1.content;
};
module.exports={getData};