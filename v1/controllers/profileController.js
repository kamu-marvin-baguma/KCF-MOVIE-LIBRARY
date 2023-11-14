const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const bcrypt = require("bcryptjs");

const getAllProfiles = async (req, res) => {
  try {
    const profile = await prisma.profile.findMany({
      // include: {
      //     genre: true
      // },
    });
    //list of genres
    // const genres = await prisma.genre.findMany({});
    res.json({ profile });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `${error.message}` });
  }
};

const getProfile = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const userExists = await prisma.profile.findUnique({
			where: { id },
			
		});

		if (!userExists) {
			return res.status(404).json({ error: "Record doesn't exist" });
		}
		return res.status(200).json({ data: userExists });
	} catch (error) {
		console.log(error);
		res.status(400).json({ status: 400, error: `${error.message}` });
	}
};



const createProfile = async (req, res) => {
    try {
		const { name, email, password } = req.body;
		
		//Check data is valid

		if (!name || !email || !password) {
			return res.status(400).json({ status: 400, msg: "Missing or empty fields" });
		}
		

		//Check if user doesn't exist
		
		const userExists = await prisma.profile.findUnique({ where: { email } });

		if (userExists) {
			return res.status(400).json({ status: 400, msg: "Record exists already" });
		}
		//save to database
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = await prisma.profile.create({
			data: {
				name: name.trim(),
				email: email.trim(),
				password: hashedPassword,
				movie: movie.trim(),
				profile: {
					create: {
						name: name.trim(),
						email: email.trim(),
						// password: hashedPassword,
					},
				},
				movie: {
					connect: { id: parseInt(movie_id) },
				},
			},
		});
		res.status(201).json({ status: 201, data: newUser });
	} catch (error) {
		console.log(error);
		res.status(400).json({ status: 400, error: `${error.message}` });
	}
};



const updateProfile = async (req, res) => {
  try {
    const { id } = req.body;
    const profile = await prisma.profile.update({
      where: { id: id },
      data: req.body,
      // include: {
      //   genre: true,
      // },
    });
    // console.log(profile.
    res.json(profile);
  } catch (error) {}
};


const deleteProfile = async (req, res) => {
	try {
		const id = parseInt(req.params.id);

		const userExists = await prisma.profile.findUnique({ where: { id } });

		if (!userExists) {
			return res.status(404).json({ error: "Record doesn't exist" });
		}

		await prisma.profile.delete({
			where: { id },
		});

		return res
			.status(200)
			.json({ status: 200, msg: "profile deleted successfully" });


	} catch (err) {
		console.log(error);
		res.status(400).json({ status: 400, error: `${error.message}` });
	}
};



module.exports = {
  getAllProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
};
