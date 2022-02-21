const User = require('./userSchema');


exports.registerUser = (req, res) => {

  User.exists({ email: req.body.email }, (err, result) => {

    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request',
        err
      })
    }


    if(result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'The email address is already taken',
      })
    }

  })

}
