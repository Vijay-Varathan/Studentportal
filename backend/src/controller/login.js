const { where } = require('sequelize');
const studentlogin = require('../model/login')

const loginData = async (req, res) => {
  try {
    const { username, password } = req.body;

    const data = await studentlogin.findOne({
      where: {
        username: username,
        password: password,
      },
    });

    if (!data) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    return res.status(201).json(data);

  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = loginData;