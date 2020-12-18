var mysql=require('mysql')
connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'test',
});
connection.connect();
const sendMessagequery=async(parent,args)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`INSERT INTO user1 (mail, message) VALUES (?,?)`,[args.mail,args.message],
        (err)=>{
            if(err) console.log("error");
            resolve(args);
        });
    });}

const sendMessagereply=async(parent, args)=>{
return new Promise((resolve,reject)=>{
    connection.query(`SELECT mail, message FROM user1 WHERE mail=?`,[args.mail],
    (err,result)=>{
        if(err) console.log("error");
        resolve(result[0]);
    }
    );
});} 

const sendMessage=async(parent,args)=>{
await sendMessagequery(parent,args);
const result=await sendMessagereply(parent,args);
//return result;
return "toString(result)";
}
module.exports={sendMessage};