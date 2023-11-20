const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/userController');
const isAuthenticated = require('../middlewares/isAuth');

router.post('/add', controllers.createUser);
router.get('/getAll', controllers.getAllUsers);
router.get('/getUserId/:name', controllers.getUserId);
// router.get('/getUsersByUsername/:full_name', controllers.getUsersByFullName);
router.get('/getUsersByEmail/:email', controllers.getUsersByEmail);
router.get('/getOneUserById/:id', controllers.getOneUserById);
// router.get('/getOneUserByName/:name', controllers.getOneUserByName);
router.get('/getOneUserByEmailPassword/:email/:password',controllers.getOneUserByEmailPassword);
router.delete('/delete/:id',controllers.deleteUser);
router.put('/update/:id', controllers.updateUser);
router.put(
    '/switchToAdmin/:ID',
    isAuthenticated(['admin', 'organizer']),
    controllers.switchToAdmin
  );

module.exports = router;