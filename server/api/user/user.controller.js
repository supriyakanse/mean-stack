const UserModel = require('./user.model');

exports.getUsers = (req, res, next) => {
    res.status(200).json({
        users: []
    });
};

exports.createUser = (req, res, next) => {
    const newUser = new UserModel({ name: req.body.name });
    newUser
    .save()
    .then((result) => { 
        res.status(201).json({
            user: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}
