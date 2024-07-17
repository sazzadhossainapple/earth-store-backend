const express = require('express');
const { userController } = require('../controller');
const { auth } = require('../middleware');

const router = express.Router();

const {
    index,
    store,
    getByEmamil,
    destroy,
    update,
    login,
    getMe,
    updatePassword,
    forgetPassword,
    resetPassword,
} = userController;

// user application routes here...

router.route('/').get(auth, index).post(store);
router.route('/login').post(login);
router.route('/me').get(auth, getMe);
router.route('/update-password').post(auth, updatePassword);
router.route('/forget-password').post(forgetPassword);
router.route('/reset-password').post(resetPassword);

router
    .route('/:email')
    .get(auth, getByEmamil)
    .put(auth, update)
    .delete(auth, destroy);

module.exports = router;
