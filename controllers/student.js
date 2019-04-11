module.exports = function (con_query) {
    const {  body, validationResult } = require('express-validator/check');
    var studentModel = require('../models/student.js')(con_query); 
    var student = {};

    /**
     * Student validation
     * @param method - request method
     * @return object
     */
    student.validate = ( method) => {
        switch (method) {
            case 'register': {
                return [ 
                    body('teacher', 'Invalid teacher').exists().isEmail(),
                    body('students', 'Invalid student').exists().isArray(),
                    body('students.*', 'Invalid student email').isEmail()      
                ]   
            }
            break;
            case 'commonstudents': {
                return [ 
                    body('teachers', 'Invalid teacher').exists().isArray(),
                    body('teachers.*', 'Invalid email').isEmail()      
                ]   
            }
            break;
            case 'retrievefornotifications': {
                return [ 
                    body('teacher', 'Invalid teacher').exists().isEmail(),
                    body('notification', 'Notification shoul be there').exists()   
                ]   
            }
            break;
            case 'suspend': {
                return [ 
                    body('student', 'Invalid email').exists().isEmail()
                    .custom(async value => {
                        console.log(value);
                        let isExist = await studentModel.isExist(value);
                        if (isExist) {
                            return Promise.resolve(true);
                        }
                        return Promise.reject("Student doesn't exist or already suspended");
                    })
                ]   
            }
            break;
        }
    };

    /**
     * Assign student - when api/register
     * @param req - request object
     * @param res - response object
     * @return json
     */
    student.assignStudent = async (req, res) => {
        try {
            var result = validationResult(req);
            const { teacher, students } = req.body

            // if there is error in validation return error
            if(!result.isEmpty()) {
                res.status(400).jsonp({
                    'success': false,
                    "message" : "invalid input",
                    "errors" : result.array()
                }).end();
                return;
            }

            var data = await studentModel.processAssignStudent(teacher, students);
            res.status(201).jsonp({
                'success':  true,
                'message': "Registered Successfully"
            }).end();
        } catch (err) {
            console.log(err);
        }
    };

    /**
     * Get common students - when api/commonstudents
     * @param req - request object
     * @param res - response object
     * @return json
     */
    student.getCommonStudents = async (req, res) => {
        try {
            var result = validationResult(req);
            const { teachers } = req.body

            // if there is error in validation return error
            if(!result.isEmpty()) {
                res.status(400).jsonp({
                    'success': false,
                    "message" : "invalid input",
                    "errors" : result.array()
                }).end();
                return;
            }
            
            var data = await studentModel.getCommonStudents(teachers);
            res.status(200).jsonp({
                'success':  true,
                'data' : data
            }).end();
         } catch (err) {
            console.log(err);
         }
    };   

    /**
     * Get notify students - when api/retrievefornotifications
     * @param req - request object
     * @param res - response object
     * @return json
     */
    student.getNotifyStudents = async (req, res) => {
        try {
            var result = validationResult(req);

            // if there is error in validation return error
            if(!result.isEmpty()) {
                res.status(400).jsonp({
                    'success': false,
                    "message" : "invalid input",
                    "errors" : result.array()
                }).end();
                return;
            }
            const { teacher, notification } = req.body

            // Extract students email from notification message
            var students_extract = notification.match(/@\S+[a-z0-9]@[a-z0-9\.]+/img);
            var students = [];
            if (students_extract) {
                students_extract.forEach(value => {
                    students.push(value.substring(1));  
                });            
            }

            var data = await studentModel.getNotifyStudents(teacher, students );
            res.status(200).jsonp({
                'success':  true,
                'data' : data
            }).end();
           
        } catch (err) {
            console.log(err);
        }
    };  

    /**
     * Suspend student - when api/suspend
     * @param req - request object
     * @param res - response object
     * @return json
     */
    student.suspend = async (req, res) => {
        try {
            var result = validationResult(req);

            // if there is error in validation return error
            if(!result.isEmpty()) {
                res.status(400).jsonp({
                    'success': false,
                    "message" : "invalid input",
                    "errors" : result.array()
                }).end();
                return;
            }
            const { student } = req.body
            var data = await studentModel.suspend(student);
            res.status(201).jsonp({
                'success':  true,
                'message' : "Suspended Successfully"
            }).end();
           
        } catch (err) {
            console.log(err);
        }
    };  
    
    return student;
}   
