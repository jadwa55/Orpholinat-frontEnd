const express = require('express');
const router = express.Router();
const {createUser , findUser, updateUser, deleteUser,roleUser} = require("../controllers/userController");


router.post('/createUser', createUser);
router.get('/getUsers', findUser);
router.put('/updateUser/:id',updateUser);
router.delete('/deleteUser/:id',deleteUser);
router.get('/updateRole/:id',roleUser);




module.exports = router;