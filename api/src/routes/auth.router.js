const { Router } = require('express');
const router = Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../utils/config');

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
      };
      const token = jwt.sign(payload, jwtSecret);
      res.json({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
