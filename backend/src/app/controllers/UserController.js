const User = require('../models/User');

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const { name, email, password, provider } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res
        .status(400)
        .json({ error: 'Users alredy exists or email not permitted.' });
    }

    const { id } = await User.create({
      name,
      email,
      password,
      provider,
    });

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

module.exports = new UserController();
