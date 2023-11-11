const express = require('express');
const router = express.Router();
const {getAllProfiles, getProfile, createProfile, updateProfile, deleteProfile} = require('../controllers/profileController');


router.route('/')
.get(getAllProfiles)

router.route('/')
.get(getProfile)

router.route('/')
.post(createProfile)

router.route('/')
.patch(updateProfile)

router.route('/')
.delete(deleteProfile)




module.exports = router;