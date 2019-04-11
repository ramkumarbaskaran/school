//Dependencies - Express 4.x and the MySQL Connection

module.exports = (express, con_query) => {
	var student = require("../controllers/student.js")(con_query);
	var router  = express.Router();

	// Router Middleware
	router.use((req, res, next) => {
	    // log each request to the console
	    console.log("You have hit the /api", req.method, req.url);

	    // Remove powered by header
	    //res.set('X-Powered-By', ''); // OLD WAY
	    //res.removeHeader("X-Powered-By"); // OLD WAY 2
	    // See bottom of script for better way

	    // CORS 
	    res.header("Access-Control-Allow-Origin", "*"); //TODO: potentially switch to white list version
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	    // we can use this later to validate some stuff

	    // continue doing what we were doing and go to the route
	    next();
	});

	// Get common students
	router.get('/commonstudents', student.validate('commonstudents'), (req, res) => {
		student.getCommonStudents(req, res);	
	});

	// Get notification students
	router.get('/retrievefornotifications', student.validate('retrievefornotifications'), (req, res) => {
		student.getNotifyStudents(req, res);	
	});

	// Suspend Student
	router.post('/suspend', student.validate('suspend'), (req, res) => {
		student.suspend(req, res);	
	});

	// Register
	router.post('/register', student.validate('register'), (req, res) => {
		student.assignStudent(req, res);	
	});

	return router;
};