const prisma = require("../lib/prisma");


const getAllPackages = async (req, res) => {
    try {
        const packages = await prisma.package.findMany();
        return res.status(200).json({packages});
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
}

const createPackage = async (req, res) => {
    try {

    } catch (err) {
        console.error(err)
        return res.status(500).send('Internal server error');
    }
}

module.exports = {getAllPackages};
