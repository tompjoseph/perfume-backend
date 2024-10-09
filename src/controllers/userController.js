import { User } from "../models/userModel.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utilities/token.js"

export const userSignUp = async (req, res, nex) => {
    try {
        const { name, email, password, mobile, profilepic } = req.body
        
        if(!name || !email || !password || !mobile) {
            return res.status(400).json({message: "All fields are required"})
        }

        const userExist = await User.findOne({email})

        if(userExist) {
            return res.status(500).json({error: "User already exist"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(hashedPassword, "Password hashed")


        const newUser = new User({ name, email, password:hashedPassword, mobile })
        const userSaved = await newUser.save()

        if(userSaved) {
            const token = await generateToken(userSaved._id)
            return res.status(200).json({message: "User created successfullty", userSaved})
        }
        return res.status(400).json({error: "Something went wron"})

    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error:error.message || "Internal server error"})
    }
}