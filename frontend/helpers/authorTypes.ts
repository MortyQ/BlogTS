export interface IAuthor {
  email: string
  id: number
  slug?: string
  firstName: string
  lastName: string
  description: string | null
  avatar?: {} | null
  background?: {} | null
  username?: string | null
}

export interface AuthorInfo extends IAuthor {
  webSite: string | null
  socialSite: string | null
  phoneNumber: string | null
}
