

// var express = require('express');
// var router = express.Router();

// /*GET home page*/

// router.get('/', function(req, res, next){
//     res.render('../public/home.html', {title: 'Form Validation', success: req.session.sucess, errors: req.session.errors});
//     req.session.errors = null;
// });

// router.post('/submit', function(req, res, next){
//     //check validity
// req.check('email', 'Invalid email address').isEmail();//must match name in form on html page, check to see if its an email address
// req.check('password', 'Password is invaild').isLength({min:4});

// var errors =req.validationErrors();
// if(errors){
//     req.session.errors = errors;
//     req.session.success = false;
// }else{
//     req.session.sucess = true;
// }
// res.redirect('/');
// });


// module.exports = router;