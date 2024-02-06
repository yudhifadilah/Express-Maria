const jwtUtils = require('../utils/jwtUtils');

exports.authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwtUtils.verifyToken(token)
        .then(decoded => {
            req.user = decoded;
            next();
        })
        .catch(err => res.sendStatus(403));
};
