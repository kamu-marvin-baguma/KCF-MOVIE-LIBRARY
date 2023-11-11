const express = require('express');
const router = express.Router();
const {getAllMovies, getMovie, postMovie, updateMovie, deleteMovie} = require('../controllers/movieController');


router.route('/')
.get(getAllMovies)

router.route('/')
.get(getMovie)

router.route('/')
.post(postMovie)

router.route('/')
.patch(updateMovie)

router.route('/')
.delete(deleteMovie)




module.exports = router;