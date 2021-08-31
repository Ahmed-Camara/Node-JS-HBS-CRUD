const Student = require('../models/studentModel');

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
exports.updateStudent = (req, res) => {

    const formData = req.body;
    const input = {
        fullName:formData.fullName,
        email:formData.email,
        address:formData.address,
        phone:formData.phone
    };
    const id = req.params.id;
    Student.updateStudent(input,id,(error,data) => {

        if(error){
            return res.send({
                error
            });
        }else{
            res.redirect('/');
        }
    });

    /*
    console.log(`id now is ${id}`);
    Student.getSingleStudent(id,(error,data) => {
        if(error){
            return res.send({
                error
            });
        }else{
            console.log('no error')
            console.log(data)
            res.send({
                data
            })
        }
    });*/
};

