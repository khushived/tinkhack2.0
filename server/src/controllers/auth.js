const prisma = require("./../lib/prisma");

const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password, // Consider hashing this before storing
      },
    });

    return res.status(201).json({ token: user.id });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("logining");

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ token: user.id });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { signUp, login };
