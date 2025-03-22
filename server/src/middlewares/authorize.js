const authorize = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    console.log(req.cookies);

    if (!token) {
      return res.status(401).send("Unauthorized");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: token,
      },
    });

    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    req.user = user;

    next();
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { authorize };
