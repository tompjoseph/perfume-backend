import { User } from "../models/userModel.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../utilities/token.js"


// User Sign Up
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

            res.cookie("token", token)

            return res.status(200).json({message: "User created successfullty", userSaved, token})
        }
        return res.status(400).json({error: "Something went wron"})

    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error:error.message || "Internal server error"})
    }
}

// User Login
export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if(!email || !password) {
            return res.status(400).json({message: "All the fields are required"})
        }

        const existingUser = await User.findOne({email})

        if(!existingUser) {
            return res.status(400).json({messasge: "User doesn't exist"})
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password)

        if(!passwordMatch) {
            return res.status(400).json({error: "Incorrect Password"})
        }

        const token = generateToken(existingUser._id)

        res.cookie("token", token)
        res.status(200).json({message: "Login Succcess"})

    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error:error.message || "Internal server error"})
    }
}