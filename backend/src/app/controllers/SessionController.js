const jwt = require('jsonwebtoken');
const User = require('../models/User');

const { secret, expiresIn } = require('../../config/auth');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password))) {
      return res
        .status(401)
        .json({ error: 'User not found or wrong password' });
    }

    const { id, name, provider } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        provider,
      },
      token: jwt.sign({ id }, secret, {
        expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();
