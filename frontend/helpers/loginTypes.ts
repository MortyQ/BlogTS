import { Post } from './authorTypes'

export interface IRegister {
  username: string
  password: string
  email: string
  provider?: string
  resetPasswordToken?: string
  confirmationToken?: string
  confirmed?: string
  blocked?: string
  role?: string
  created_by?: string
  updated_by?: string
  identifier?: string
}

export interface ILogin {
  identifier: string
  password: string
  jwt?: string
}

export enum Role {
  'Public',
  'Authenticated'
}

export interface ILoginUser {
  confirmed?: boolean
  email?: string
  id?: number
  role?: {}
  slug?: string
  username: string
  posts?: Post
}

export interface IAuthResponce {
  jwt: string
  user: ILoginUser
}
