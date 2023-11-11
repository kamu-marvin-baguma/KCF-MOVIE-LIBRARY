const express = require('express');
const router = express.Router();
const {getAllAdmins, getAdmin, postAdmin, updateAdmin, deleteAdmin} = require('../controllers/adminController');


router.route('/')
.get(getAllAdmins)

router.route('/')
.get(getAdmin)

router.route('/')
.post(postAdmin)

router.route('/')
.patch(updateAdmin)

router.route('/')
.delete(deleteAdmin)




module.exports = router;