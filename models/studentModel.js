const mysql = require('./database');

exports.getAllStudent = (query,callback) => {
    mysql.query(query,(error, rows, fields) => {

        if (!error){
            callback(undefined,rows);
        }else{
            callback('No records in the database',undefined);
        }
    });
};

exports.saveStudent = (data,callback) => {

    const query = `INSERT INTO db_students(Full_name,Email,Address,Phone) VALUES ('${data.fullName}','${data.email}','${data.address}','${data.phone}')`;
    mysql.query(query,(error) => {

        if(error){
            callback('Error with saving the data');
        }else{
            callback(undefined);
        }
    });
};

exports.getStudent = (id,callback) => {
    const query = `SELECT * FROM db_students WHERE id = ?`;
    mysql.query(query,[id],(error,data) => {
        if(error) callback('Error with updating the data',undefined);
        else callback(undefined,data[0]);
    });
};

exports.updateStudent = (input,id,callback) => {

    const query = `UPDATE db_students SET ? WHERE id = ?`;

    mysql.query(query,[input,id],(error,data) => {
        if(error) callback('Error with updating the data',undefined);
        else callback(undefined,data);
    });
};

exports.deleteStudent = (id,callback) => {
    const query = `DELETE FROM db_students WHERE id = ?`;

    mysql.query(query,[id],(error) => {

        if(error) callback('Error with deleting the data');
        else callback(undefined);
    });
};