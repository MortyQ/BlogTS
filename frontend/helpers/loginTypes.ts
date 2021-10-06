export interface IRegister {
  username: string
  password: string
  email: string
  provider: string
  resetPasswordToken: string
  confirmationToken: string
  confirmed: string
  blocked: string
  role: string
  created_by: string
  updated_by: string
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
