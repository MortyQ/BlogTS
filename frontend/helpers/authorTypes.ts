export interface IAuthor {
  email: string
  id: number
  slug?: string
  firstName: string
  lastName: string
  description: string | null
  avatar?: File | null
  background?: File | null
  username?: string | null
}

export interface AuthorInfo extends IAuthor {
  webSite: string | null
  socialSite: string | null
  phoneNumber: string | null
  post?: {}
}

export interface Post {
  title: string
  description: string
  image: File | null
  socialSite?: string | null
  webSite?: string | null
  profile?: string | null
}
