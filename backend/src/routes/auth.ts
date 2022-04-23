import express, { application, Router } from 'express'
import bcrypt from 'bcryptjs'
import { User } from '../entities/user'
import jwt from 'jsonwebtoken'
import { isAuthenticated } from '../middleware'


const routes = express()


routes.post('/signup', async (req, res) => {

    try {
        const {
            firstname,
            lastname,
            email,
            username,
            password,
        } = req.body
        const Exist = await User.findOne(
            {where:
                [{ email }, { username }]
                
            })
        if(Exist){
            return res.status(400).json({
                message:"user Exists!",
            })
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = User.create({
            firstname,
            lastname,
            email,
            username,
            password: hashedPassword
        })
        await user.save()
        return res.status(200).json({user})
        
    } catch (error) {
        return res.status(500).json({error})
    }
})

routes.post('/login',async (req,res)=>{
    try{
        const {
            email,
            password
        } = req.body
        const user  = await User.findOne({where:[{email}]})
        if(!user){
            return res.status(400).json({message:"User with this username or email does not exist!"})
        }
        const validPass = await bcrypt.compare(password,user.password)
        if(!validPass){
            return res.status(400).json({message:"Invalid Password"})
        }
        const token = jwt.sign({ email:user.email} , process.env.HASHING_KEY,{
            expiresIn:'1d'
        
        })
        return res.status(200).json({
            message:"Logged in succesfuly!",token
        })
    }catch(error){
        return res.status(500).json({error})
    }
    
})


routes.get('/me', isAuthenticated, async (req,res) =>{
    try{
        const {email} = req.body
        const user = await User.findOne({where:{email}})
        res.json({user})
        
    }catch(error){
        res.status(500).json({ error })

    }
})







export default routes   