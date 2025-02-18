const roleMiddleware = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        const { role } = req.user;

        if (allowedRoles.includes(role)) {
            next();
        } else {
            res.status(403).json({ message: 'Access denied' });
        }
    };
};

module.exports = roleMiddleware;
