import express from 'express'
import bcrypt from 'bcryptjs'
import { Message } from '../entities/message'
import { User } from '../entities/user'


const routes = express()


routes.get('/', async (req, res) => {

})

routes.post('/add', async (req, res) => {

    try {
        const { text, userId, conversationId } = req.body
        // const user = User.findOneBy({id: parseInt(userId)})
        const message = Message.create({
            text: text,
            user: userId,
            conversation: conversationId,
        })
        await message.save()
        return res.json(message)

    } catch (err) {
        console.log(err)
    }
})
export default routes   