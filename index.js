const express = require('express')
const cors = require ('cors')
const bodyParser = require('body-parser');
const authRoute =  require('./v1/routes/authRoute');


const {getAllMovies, getMovie, postMovie, updateMovie, deleteMovie} = require('./v1/controllers/movieController');
const {getAllProfiles, getProfile, createProfile, updateProfile, deleteProfile} = require('./v1/controllers/profileController');

const movieRouter = require('./v1/routes/movieRoutes')
const profileRouter = require('./v1/routes/profileRoutes')

const app = express()
const port = 6060

//Import and using the protected route
const protectedRoute = require('./v1/routes/protectedRoute');
app.use(cors());
app.use('/api', protectedRoute);

//Middleware
app.use(bodyParser.json());


// app.use(express.json())

//Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/profiles', profileRouter)

// Welcome Route
app.get('/', (req, res) => {
  res.send('Welcome to the Movie Library!');
});


//Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})