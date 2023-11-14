const express = require('express');
const router = express.Router();
const {getAllMovies, getMovie, postMovie, updateMovie, deleteMovie} = require('../controllers/movieController');


router.route('/')
.get(getAllMovies)

router.route('/:id')
.get(getMovie)

router.route('/')
.post(postMovie)

router.route('/:id')
.put(updateMovie)

router.route('/:id')
.delete(deleteMovie)




module.exports = router;