export interface IAuthor {
  email: string
  id?: number
  slug?: string
  firstName: string
  lastName: string
  description?: string | null
  avatar?: {} | null
  background?: {} | null
}

export interface AuthorInfo extends IAuthor {
  website?: string | null
  socialSite?: string | null
  phoneNumber?: string | null
}
