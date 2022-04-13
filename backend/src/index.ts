import { createConnection,  } from 'typeorm'
import {config} from 'dotenv'
import express,{Request, Response, json, urlencoded} from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import userRoutes from './routes/user'
import authRoutes from './routes/auth'

// import { AppDataSource } from './data.source'

config()

// findOneBy(id:{par})

const app = express()
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(json());

app.use(urlencoded({ extended: false }));

app.get('/', (req:Request,res:Response)=>{
    res.send("test")
  
})


app.use('/user', userRoutes)

app.listen(process.env.PORT,async () => {
    console.log(`Application started on port 7070!`);
    try {
        await createConnection({
            type:'postgres',
            host:process.env.DB_HOSTNAME,
            port:+process.env.DB_PORT!,
            username:process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            entities:[],
            synchronize:true,
            logging:false
        })  
    console.log(`Connected to DB`);

     } catch (error) {
           console.log({error})
        }

}) 
console.log("hello")