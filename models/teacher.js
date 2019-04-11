module.exports = (con_query) => {
    var teacher = {};

    /** 
     * Create Teacher by email
     * @param teacher - teacher email
     * @return id 
     */
    teacher.createTeacher = async (teacher) => {
        try {
            let result = await con_query('INSERT INTO teachers (email) VALUES(?)', teacher);
            return result.insertId;
        } catch(err) {
            throw err;
        }
    };

    /**
     * Get teacher by email
     * @param teacher - teacher email
     * return id/null
     */
    teacher.getTeacher = async (teacher) => {
        try {
            let result = await con_query('SELECT id FROM teachers WHERE email = ? and is_active = ?', [teacher, 1]);
            if(result.length > 0) {
                return result[0].id;
            } else {
                return null;
            }
        } catch(err) {
            throw err;
        }
    };
    
    /**
     * Get teachers by emails
     * @param teachers - teacher emails
     * return array
     */
    teacher.getTeachers =  async (teachers) => {
        try {
            let result = await con_query('SELECT id FROM teachers WHERE email IN (?) and is_active = ?', [teachers, 1]);
            var data = [];
            result.forEach(row => {
            data.push(row.id);   
            });
            return data;
        } catch(err) {
            throw err;
        }
    };

    return teacher;
}
