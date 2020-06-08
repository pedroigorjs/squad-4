const User = require('../models/User');

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const {
 name, email, password, provider
} = req.body;

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

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res
          .status(400)
          .json({ error: 'Users alredy exists or email not permitted.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res
        .status(401)
        .json({ error: 'User not found or wrong password' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

module.exports = new UserController();
