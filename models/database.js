const mysqlDB = require('mysql');


const mysqlConnection = mysqlDB.createConnection({
  host:'localhost',
  user:'camara',
  password:'ahmed',
  database:'crud_operation',
  multipleStatements: true
});

mysqlConnection.connect(error => {
  if(!error){
    console.log('Succes connection');
  }else{
    console.log(error)
  }
});

module.exports = mysqlConnection;