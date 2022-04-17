import jwt from 'jsonwebtoken'
import { User } from '../entities/user'
import { AuthRequest, MyToken } from '../types/auth'

export const isAuthenticated = async (req: AuthRequest, res, next) => {
    const { authorization } = req.headers
  
    jwt.verify(
      authorization,
      process.env.HASHING_KEY,
      async (err, token: MyToken) => {
        if (err) {
          return res.status(401).json({
            message: 'Invalid token',
          })
        }
        req.email = token.email
        next()
  
        // check if token is expired
      }
    )
  }