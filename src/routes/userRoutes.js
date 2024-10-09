import express from "express";
import { userSignUp } from "../controllers/userController.js";
const router = express.Router()

router.post("/user-sign-up", userSignUp)

router.post("/user-login", (req, res, next) => {
    res.send('User Logged In')
})

router.put("/user-profile-update", (req, res, next) => {
    res.send('User Profile Updated')
})

router.get("/user-profile", (req, res, next) => {
    res.send('User Profile')
})

router.delete("/user-profile-delete", (req, res, next) => {
    res.send('User Profile Deleted')
})

router.delete("/user-logout", (req, res, next) => {
    res.send('User Log Out')
})

router.get("/check-user", (req, res, next) => {
    res.send('User Check')
})

export { router as userRouter }