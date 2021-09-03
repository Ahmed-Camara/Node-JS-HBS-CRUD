const mysqlConnection = require('../models/database');
const Student = require('../models/studentModel');

let studentData = {};

exports.homePage = (req,res) => {
    
    const query = 'SELECT * FROM db_students';

    Student.getAllStudent(query,(error,data) => {
        if(error){

            return res.send({
                error
            });
        }


        res.render('index',{
            data
        })
    });
};

exports.createStudent = (req,res) => {

    const formData = req.body;
    const input = {
        fullName:formData.fullName,
        email:formData.email,
        address:formData.address,
        phone:formData.phone
    };

    console.log(`input : ${input.email}`);

    Student.saveStudent(input,(error) => {

        if(error){
            return res.send({
                error
            });
        }else{
            res.redirect('/');
        }
    });
};
exports.deleteStudent = (req, res) => {
    const id = req.params.id;

    Student.deleteStudent(id,(error) => {
        if(error){
            return res.send({
                error
            });
        }else{
            res.redirect('/');
        }
    });
};

exports.getStudent = (req,res) => {
    const id = req.params.id * 1;

    Student.getStudent(id,(error,data) => {
        if(error){
            return res.send({
                error
            });
        }else{
            //studentData = data;
            res.json({
                data
            });
        }
    });
};


exports.updateStudent = (req, res) => {
    const id = req.params.id * 1;

    const input = {
        Full_name:req.body.fullName,
        Email:req.body.email,
        Address:req.body.address,
        Phone:req.body.phone
    };


    Student.updateStudent(input,id,(error) => {

        if(error){
            return res.send({
                error
            });
        }

        res.redirect('/');
    });
};
