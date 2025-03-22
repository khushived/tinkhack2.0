const prisma = require("./../lib/prisma");

const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    const userCreated = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userCreated) {
      return res.status(400).json({ message: "User not created" });
    }

    return res
      .status(201)
      .cookie("token", userCreated.id, {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res
      .status(200)
      .cookie("token", user.id, {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({ token: user.id });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { signUp, login };
