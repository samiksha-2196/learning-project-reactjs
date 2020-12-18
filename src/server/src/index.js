/*var { ApolloServer } = require('apollo-server');
//var typeDefs = require('./schema');
//var getData=require('./resolver');
//const sendMessage=require('./resolver');
/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:'password',
    database:'test'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

const resolvers = {
  Query: {
    getData,
  },
  Mutation:{
sendMessage,
  },

};
var resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}
var server=new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname,'schema.js'),
    'utf8'
  ),
  resolvers,
})
server
.listen()
.then(({url})=>
console.log('server is running on ${url}')
)


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
 */
const { ApolloServer } = require('apollo-server');
const { getData } = require("./resolver/query");
const { sendMessage } = require("./resolver/mutation");
const resolvers = {
  Query: {
    getData,
  },
  Mutation: {
sendMessage,
  }
}
var fs=require('fs');
var path=require('path');
const server=new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname,'schema.graphql'),
    'utf8'
  ),
  resolvers,
})
server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
