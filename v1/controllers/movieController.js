const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllMovies = async (req, res) => {
  try {
    const movies = await prisma.movie.findMany({
      // include: {
      //     genre: true
      // },
    });
    //list of genres
    // const genres = await prisma.genre.findMany({});
    res.json({ movies });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getMovie = async (req, res) => {
  try {
    
    const movie = await prisma.movie.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if(!movie){

      return res.status(404).json({error:'movie not Found'});
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({error: 'Internal Server Error'});
  }
};

const postMovie = async (req, res) => {

  const{title, description,  price,  posterUrl, genre} = req.body
  try {
    const newMovie = await prisma.movie.create({
     data: req.body
    });
    res.json(newMovie);
  } catch (error) {
    res.status(500).json({error: 'Internal server error'});
  }
};

const updateMovie = async (req, res) => {
  try {
    console.log(req.body)
    
    const updatedMovie = await prisma.movie.update({
      where: { id: parseInt(req.params.id) },
      data: {...req.body},
      // include: {
      //   genre: true,
      // },
    });
    if(!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteMovie = async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const existMovie = await prisma.movie.findUnique({
      where: {id :id}
    })

    if(!existMovie) {
      res.json({message:"movie doesnt exist"})
    }
    
    const deletedMovie = await prisma.movie.delete({
        where: { id: id},
    });

    
      // if (!deletedMovie) {
      //     return res.status(404).json({ error: 'Movie not found' });
      // }
      res.json(deletedMovie);
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

// const deleteMovie = async (req, res) => {
//   try {
//     const  id  = parseInt{req.params.id};
//     const userExists = await prisma.movie.findUnique({where: {id}});
//     if(!userExists) {
//       return res.status(404).json({error: 'Movie not found'});
//     }

//     await prisma.movie.delete({
//       where: { id },
//     });
//     return res
// 			.status(200)
// 			.json({ status: 200, msg: "Record deleted successfully" });
//   } catch (error) {
//     console.log(error);
// 		res.status(400).json({ status: 400, error: `${error.message}` });
//   }
// };

module.exports = {
  getAllMovies,
  getMovie,
  postMovie,
  updateMovie,
  deleteMovie,
};
