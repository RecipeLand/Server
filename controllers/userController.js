const User = require('../models/user')
const bcrypt = require('bcryptjs');

class UserController{
  static login(req, res){
    let {email, password} = req.body
    User.find({email: email})
    .then(user => {
      let compare = bcrypt.compareSync(user.password, password)
      if(compare){
        jwt.sign({ id: user._id, name: user.name}, process.env.secretKey, function(err, token) {
          res.status(201).json({
            token: token,
            name: user.name
          })
        })
      } else {
        res.status(400).json(err)
      }
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }
}

module.exports = UserController