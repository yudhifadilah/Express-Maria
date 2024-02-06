const authService = require('../services/authService');

exports.login = (req, res) => {
    authService.login(req.body.username, req.body.password)
        .then(token => res.json({ token }))
        .catch(err => res.status(401).json({ error: err.message }));
};
