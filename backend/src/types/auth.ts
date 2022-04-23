import { JwtPayload } from 'jsonwebtoken'
import { Request } from 'express'

export interface MyToken extends JwtPayload {
  email: string
  exp: number
}

export interface AuthRequest extends Request {
  email: string
}
