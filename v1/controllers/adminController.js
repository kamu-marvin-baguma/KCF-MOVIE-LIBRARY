const { PrismaClient} = require ('@prisma/client')
const prisma = new PrismaClient()




const getAllAdmins = async(req, res, ) =>{
    try {
        const admins = await prisma.admin.findMany({})
        res.json(admins)
    } catch (error) {
      (error)
    }
}

const getAdmin = async(req, res, next) =>{
    res.send('one user')
}

const postAdmin = async(req, res) =>{
    try {
        const admin = await prisma.admin.create({
            data: req.body
        }) 
        res.json(admin)
    } catch (error) {
        
    }
}

const updateAdmin = async(req, res) =>{
    res.send('updated users')
}

const deleteAdmin = (req, res) =>{
    res.send('deleted user')
}






module.exports ={getAllAdmins, getAdmin, postAdmin, updateAdmin, deleteAdmin}