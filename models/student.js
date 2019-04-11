module.exports = (con_query) => {
    var student = {};
    var teacherModel = require('../models/teacher.js')(con_query); 

    /** 
     * Create Student by email
     * @param email - email
     * @return id 
     */
    student.createStudent = async (email) => {
        try {
            let result = await con_query('INSERT INTO students (email) VALUES(?)', email);
            return result.insertId;  
        } catch(err) {
            throw err;
        }   
    };

    /**
     * Create Students by using emails
     * @param students - student emails
     * @param student_info - array containg student info
     * return array
     */
    student.createStudents = async (students, student_info) => {
        try {
            for (var i = 0; i < students.length; i++) {
                var element = students[i];

                // if student is not there in the array then create new student
                if (!student_info[element]) {
                    student_info[element] = await student.createStudent(element);
                }
                
            }
            return student_info;
        } catch(err) {
            throw err;
        }
    }

    /**
     * Process assign student
     * @param teacher  - email
     * @param students - student emails 
     * @return data - array
     */
    student.processAssignStudent = async (teacher, students) => {
        try {
            var teacher_id = await teacherModel.getTeacher(teacher);

            // if teacher is not exist in db, then create new teacher
            if (!teacher_id) {
                teacher_id = await teacherModel.createTeacher(teacher);
            } 

            var student_info = await student.getStudents(students);
            student_info = await student.createStudents(students, student_info);
            let data = await student.assignStudent(teacher_id, student_info);
            return data;    
        } catch(err) {
            throw err;
        }   
    };

    /**
     * check if student is already assigned to particualr teacher
     * @param teacher_id - teacher id
     * @param student_id - student id
     * @return result count 
     * 
     */
    student.isStudentAssigned = async (teacher_id, student_id) => {
        try {
            let result = await con_query('SELECT teacher_id FROM teacher_students WHERE teacher_id = ? and student_id = ?', [teacher_id, student_id]);
            return result.length;
        } catch(err) {
            throw err;
        }  
    }; 

    /** 
     * Assign student to the teacher
     * @param teacher_id - teacher id
     * @param student_info - array containing student info
     * @return result set
     */
    student.assignStudent = async (teacher_id, student_info) => {
        try {
            var result;
            for (var i in student_info) { 

                // Check if the student is assigned to the teacher already. if not , then assign
                let isAssigned = await student.isStudentAssigned(teacher_id, student_info[i]);
                if(isAssigned == 0) {
                    result = await con_query('INSERT INTO teacher_students (teacher_id, student_id) VALUES(?, ?)', [teacher_id, student_info[i]]);
                }

            }
            return result;
        } catch(err) {
            throw err;
        }
    };

    /**
     * Get students by using emails
     * @param students - student emails
     * @return data - result data
     */
    student.getStudents = async (students) => {
        try {
            let result = await con_query('SELECT id, email FROM students WHERE email IN (?) and is_active = ?', [students, 1]);
            var data = [];

            // Assign student ids against their email
            result.forEach ( element => {
                data[element.email] = element.id
            });

            return data;
        } catch(err) {
            throw err;
        }
    }

    /**
     * Get common students
     * @param teachers - teacher emails
     * @return result
     */
    student.getCommonStudents = async (teachers) => {
        try {
            var teacher_ids = await teacherModel.getTeachers(teachers);
            let length = teacher_ids.length;

            // If there is no teacher return empty result
            if (teacher_ids.length == 0) {
                return [];
            }

            var query = `SELECT id, email
                FROM students
                WHERE id IN (SELECT *
                    FROM 
                        (select s.id
                            from students as s 
                            inner join teacher_students as ts on s.id = ts.student_id 
                            where ts.teacher_id in (?)
                            group by s.id 
                            having count(s.id) = ?)
                        AS temp)`;
            
            let result = await con_query(query, [teacher_ids, length]);
            return result;
        } catch(err) {
            throw err;
        }
    };

    /**
     * Get notification students
     * @param teacher - teacher email
     * @param students - student emails
     * @return result
     */
    student.getNotifyStudents = async (teacher, students) => {
        try {

            // Get teacher ids
            var teacher_ids = await teacherModel.getTeachers(teacher);

            // if there is no teacher then assign null value
            teacher_ids = teacher_ids.length > 0 ? teacher_ids : '';

            // if there is no students then assign null value
            students = students.length > 0 ? students : '';

            var query = `SELECT * FROM (
                SELECT s.id, s.email FROM students as s INNER JOIN teacher_students as ts on s.id = ts.student_id WHERE ts.teacher_id in (?) AND is_active = 1
                UNION
                SELECT s.id, s.email FROM students as s WHERE email in (?) AND is_active = 1
                ) as temp GROUP BY id`;
            let result = await con_query(query, [teacher_ids, students]);
            return result;
        } catch(err) {
            throw err;
        }
    };

    /**
     * Suspend the student by email
     * @param student - student email
     * @return result
     */
    student.suspend = async (student, next) => {
        try {
            var query = 'UPDATE students set is_active = 0 WHERE email = ?';
            let result = await con_query(query, [student]);
            return result;
        } catch(err) {
            throw err;
        }
    };

    /**
     * Check if student is exist
     * @param student - student email
     * @return count
     */
    student.isExist = async (student) => {
        try {
            let result = await con_query('SELECT count(id) as count FROM students WHERE email IN (?) and is_active = ?', [student, 1]);
            return result[0].count;
        } catch(err) {
            throw err;
        }
    };

    /**
     * Get one active student
     * @return result
     */
    student.getActiveStudent = async () => {
        try {
            let result = await con_query('SELECT id, email FROM students WHERE is_active = ? order by id limit 1', [ 1]);
            if (result.length > 0 ) {
                return result[0].email;
            } else {
                return null;
            }
        } catch(err) {
            throw err;
        }
    };
    return student;
}
 