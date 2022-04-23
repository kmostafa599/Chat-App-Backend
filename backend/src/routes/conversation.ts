import express, { application, Router } from 'express'
import bcrypt from 'bcryptjs'
import { User } from '../entities/user'
import jwt from 'jsonwebtoken'
import { isAuthenticated } from '../middleware'
import { Conversation } from '../entities/conversation'


const routes = express()


routes.post('/', async (req, res) => {

    try {
        
        const conversation = await Conversation.find()
       
        return res.status(200).json({conversation})
        
    } catch (error) {
        return res.status(500).json({error})
    }
})

// routes.post('/login',async (req,res)=>{
//     try{
//         const {
//             content,
//             userId
//         } = req.body
//         const user  = await Conversation.findOne({where:[{email}]})
//     //     if(!user){
//     //         return res.status(400).json({message:"User with this username or email does not exist!"})
//     //     }
//     //     const validPass = await bcrypt.compare(password,user.password)
//     //     if(!validPass){
//     //         return res.status(400).json({message:"Invalid Password"})
//     //     }
//     //     const token = jwt.sign({ email:user.email} , process.env.HASHING_KEY,{
//     //         expiresIn:'1d'
        
//     //     })
//     //     return res.status(200).json({
//     //         message:"Logged in succesfuly!",token
//     //     })
//     // }catch(error){
//     //     return res.status(500).json({error})
//     // }
    
// })


// // routes.get('/me', isAuthenticated, async (req,res) =>{
// //     try{
// //         const {email} = req.body
// //         const user = await User.findOne({where:{email}})
// //         res.json({user})
        
// //     }catch(error){
// //         res.status(500).json({ error })

// //     }
// // })







export default routes   