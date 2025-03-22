const authorize = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.status(401).send('Unauthorized');
        }

        const token = authorization.split(' ')[1];

        if (!token) {
            return res.status(401).send('Unauthorized');
        }

        const user = await prisma.user.findUnique({
            where: {
                id: token
            }
        })

        if (!user) {
            return res.status(401).send('Unauthorized');
        }

        req.user = user;

        next();
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
    }
}

module.exports = {authorize};