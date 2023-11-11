const express = require('express')
const app = express()


const {getAllMovies, getMovie, postMovie, updateMovie, deleteMovie} = require('./v1/controllers/movieController');
const {getAllProfiles, getProfile, createProfile, updateProfile, deleteProfile} = require('./v1/controllers/profileController');

const movieRouter = require('./v1/routes/movieRoutes')
const profileRouter = require('./v1/routes/profileRoutes')


const port = 6060

app.use(express.json())
// app.use(express.urlencoded)


app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/profiles', profileRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})