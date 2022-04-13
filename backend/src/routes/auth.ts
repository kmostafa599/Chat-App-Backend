import express from 'express'
import bcrypt from 'bcryptjs'
import { User } from '../entities/user'


const routes = express()


routes.get('/signup', async (req,res)=>{
   const {
       firstname,
       lastname,
       email,
       username,
       password,
   } = req.body

   const user = User.create({
       firstname,
       lastname,
       email,
       username,
       password
   })
})

export default routes   