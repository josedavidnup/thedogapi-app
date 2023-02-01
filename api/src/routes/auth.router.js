const { Router } = require('express');
const router = Router();
const passport = require('passport');

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      res.json(req.user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
