import { createConnection,  } from 'typeorm'
import {config} from 'dotenv'
import express,{Request, Response, json, urlencoded} from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import userRoutes from './routes/user'
import authRoutes from './routes/auth'
import conversationRoutes from './routes/conversation'
import messageRoutes from './routes/message'


import { User } from './entities/user'
import { Message } from './entities/message'
import { Server, Socket } from 'socket.io'
import * as http from 'http';
import { Conversation } from './entities/conversation'


// import { AppDataSource } from './data.source'

config()

// findOneBy(id:{par})

const app = express()
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(json());
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', socket=>{
    socket.emit("your id", socket.id)
    socket.on("send message", body => {
        io.emit("message", body)
    })
})

app.use(urlencoded({ extended: false }));

app.get('/', (req:Request,res:Response)=>{
    res.send("test")
  
})


app.use('/user', userRoutes)
app.use('/auth', authRoutes)
app.use('/conversations', conversationRoutes)
app.use('/messages', messageRoutes)


app.listen(process.env.PORT,async () => {
    console.log(`Application started on port 7070!`);
    try {
        await createConnection({
            type:'postgres',
            host:process.env.DB_HOSTNAME,
            port:+process.env.DB_PORT!,
            username:process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            entities:[User,Message,Conversation],
            synchronize:true,
            logging:false
        })  
    console.log(`Connected to DB`);

     } catch (error) {
           console.log({error})
        }

}) 
console.log("hello")